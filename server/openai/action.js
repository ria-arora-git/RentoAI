'use server'

import { z } from "zod";
import { ChatOpenAI } from "@langchain/openai";
import {pull} from "langchain/hub";
import { SqlDatabase } from "langchain/sql_db";
import { DataSource } from "typeorm";
import { QuerySqlTool } from "langchain/tools/sql";

// Database Configuration
const datasource = new DataSource({
  type: "postgres",
  host: 'ep-bitter-forest-a1hrm6ta-pooler.ap-southeast-1.aws.neon.tech',
  port: 5432,
  username: "neondb_owner",
  password: "npg_S5PeYk3RlciF",
  database: "neondb",
  ssl: true,
});

// Language Model Configuration
const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0
});

// Schema Validation
const queryOutput = z.object({
  query: z.string().describe("Syntactically valid SQL query."),
});

const structuredLlm = llm.withStructuredOutput(queryOutput);

// Function to Generate SQL Query
export async function GenerateQuery(quest){
  const db = await SqlDatabase.fromDataSourceParams({
    appDataSource: datasource,
  });

  const queryPromptTemplate = await pull(
    "langchain-ai/sql-query-system-prompt"
  );

  const writeQuery = async (state) => {
    const promptValue = await queryPromptTemplate.invoke({
      dialect: db.appDataSourceOptions.type,
      top_k: 10,
      table_info: await db.getTableInfo(), 
      input: state.question,
    });
    const result = await structuredLlm.invoke(promptValue);
    return { query: result.query };
  };

  return await writeQuery({question: quest})
}

// Function to Execute SQL Query
export async function GenerateResult(sqlquery){
  const db = await SqlDatabase.fromDataSourceParams({
    appDataSource: datasource,
  });

  const executeQuery = async (state) => {
    const executeQueryTool = new QuerySqlTool(db);
    return { result: await executeQueryTool.invoke(state.query) };
  };
  
  return await executeQuery({
    query: sqlquery,
  });
}

// Main Function to Chat with Rent
export async function ChatWithRent(quest){
  const sqlquery = await GenerateQuery(quest);
  const res = await GenerateResult(sqlquery.query);

  const generateAnswer = async () => {
    const promptValue =
      "Given the following user question, corresponding SQL query, " +
      "and SQL result, answer the user question. \n\n" +
      `Question: ${quest}\n` +
      `SQL Query: ${sqlquery.query}\n` +
      `SQL Result: ${res.result}\n`;
    const response = await llm.invoke(promptValue);
    return { answer: response.content };
  };

  return await generateAnswer()
}
