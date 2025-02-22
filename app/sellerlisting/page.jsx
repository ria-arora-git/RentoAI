'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import plus from '@/public/plus.svg';
import logo from '@/public/logo.svg';

// List of random names
const ownerNames = [
  "John Doe", "Jane Smith", "Robert Johnson", "Michael Brown", "William Davis",
  "Mary Miller", "Patricia Wilson", "Linda Moore", "Elizabeth Taylor", "James Anderson",
  "Christopher Martin", "Amanda White", "Steven Harris", "Richard Clark", "Barbara Lewis",
  "Thomas Walker", "Jessica Hall", "Daniel Young", "Nancy Allen", "Margaret Wright",
  "George King", "Sarah Scott", "Charles Green", "Betty Adams", "Paul Baker",
  "Kimberly Nelson", "Lisa Hill", "Emily Carter", "David Perez", "Karen Turner",
  "Susan Phillips", "Dorothy Campbell", "Jessica Mitchell", "Brian Roberts", "Kenneth Evans"
];

// Function to generate a random 10-digit number
const generateRandomContact = () => Math.floor(Math.random() * 9000000000) + 1000000000;

// Function to generate a random ID
const generateRandomId = () => Math.random().toString(36).substr(2, 9);

export default function Table() { // Changed function name to start with a capital letter to follow React component naming conventions
  const [tableData, setTableData] = useState([]);

  // Static data with 5 rows
  const staticData = [
    { id: generateRandomId(), name: ownerNames[Math.floor(Math.random() * ownerNames.length)], contact: generateRandomContact() },
    { id: generateRandomId(), name: ownerNames[Math.floor(Math.random() * ownerNames.length)], contact: generateRandomContact() },
    { id: generateRandomId(), name: ownerNames[Math.floor(Math.random() * ownerNames.length)], contact: generateRandomContact() },
    { id: generateRandomId(), name: ownerNames[Math.floor(Math.random() * ownerNames.length)], contact: generateRandomContact() },
    { id: generateRandomId(), name: ownerNames[Math.floor(Math.random() * ownerNames.length)], contact: generateRandomContact() }
  ];

  useEffect(() => {
    setTableData(staticData);
  }, []); 

  return (
    <>
      <header className='w-full fixed top-0 left-0 bg-purple-800/80 backdrop-blur-sm z-50 h-20 flex justify-between items-center px-4 border-b border-purple-300/20'>
        <div className='flex justify-between items-center'>
          <div className='hover:scale-105 transition-transform duration-300'>
            <Image src={logo} alt='logo' className='h-20 w-20 p-1 ml-6' />
          </div>
          <div>
            <h1 className='text-white text-4xl font-bold ml-2 hover:text-purple-300 transition-colors'>RentoAI</h1>
          </div>
        </div>
        <div className="space-x-4 flex justify-end">
          <Image src={plus} alt="plus" className="h-16 w-16 p-2 my-4" />
          <button 
            onClick={() => setTableData([...tableData, { id: generateRandomId(), name: ownerNames[Math.floor(Math.random() * ownerNames.length)], contact: generateRandomContact() }])} // Add new row on button click
            className="bg-white px-4 py-2 my-6 rounded-lg hover:bg-purple-700">
            Add Data
          </button>
        </div>
      </header>
      <div className="min-h-screen bg-purple-50 my-auto pt-20"> {/* Added padding to avoid overlap with the fixed header */}
        <div className="p-4 text-black"> {/* Corrected text color to black */}
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold">Data Table</h1> {/* Added heading for the table */}
          </div>
        </div>
        <div className="max-w-6xl mx-auto p-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-purple-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Serial No.</th>
                  <th className="px-4 py-3 text-left">ID</th>
                  <th className="px-4 py-3 text-left">Owner's Name</th>
                  <th className="px-4 py-3 text-left">Owner's Contact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100">
                {tableData.map((item, index) => (
                  <tr key={item.id} className="hover:bg-purple-50">
                    <td className="px-4 py-3 text-black">{index + 1}</td> {/* Added Serial No. */}
                    <td className="px-4 py-3 text-black">{item.id}</td>
                    <td className="px-4 py-3 text-black">{item.name}</td>
                    <td className="px-4 py-3 text-black font-medium">{item.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
