'use server'

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()




export async function getProperties(){
    const res = await prisma.user.findMany({
        take: 10
    })
    return res
}