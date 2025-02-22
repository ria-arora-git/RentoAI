'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import plus from '@/public/plus.svg'
import logo from '@/public/logo.svg'

export default function table() {
  const [tableData, setTableData] = useState([]);

  const fetchData = async () => {
    const mockData = {
      id: tableData.length + 1,
      name: `Item ${tableData.length + 1}`,
      value: Math.floor(Math.random() * 100),
      category: 'Sample'
    };
    
    setTableData([...tableData, mockData]);
  };

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <>
    <header className='w-full fixed top-0 left-0 bg-purple-800/80 backdrop-blur-sm z-50 h-20 flex justify-between items-center px-4 border-b border-purple-300/20'>
        <div className='flex justify-between items-center'>
            <div className='hover:scale-105 transition-transform duration-300'>
                <Image
                    src={logo}
                    alt='logo'
                    className='h-20 w-20 p-1 ml-6'
                />
            </div>
            <div>
                <h1 className='text-white text-4xl font-bold ml-2 hover:text-purple-300 transition-colors'>RentoAI</h1>
            </div>
        </div>
        <div className="space-x-4 flex justify-end">
          <Image
            src={plus}
            alt="plus"
            className="h-16 w-16 p-2 my-4"/>
            <button 
              onClick={fetchData}
              className="bg-white px-4 py-2 my-6 rounded-lg hover:bg-purple-700">
              Add Data
            </button>
          </div>
    </header>
    <div className="min-h-screen bg-purple-50 my-auto">
      <div className="p-4 text-white">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold"></h1>
          <div className="space-x-4 flex justify-end">
            <Image
            src={plus}
            alt="plus"
            className="h-20 w-20 p-1"/>
            <button 
              onClick={fetchData}
              className="bg-white px-4 py-2 rounded hover:bg-purple-600"
            >
              Add Data
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-purple-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">serial no.</th>
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">size</th>
                <th className="px-4 py-3 text-left">location</th>
                <th className="px-4 py-3 text-left">Category</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-100">
              {tableData.map((item) => (
                <tr key={item.id} className="hover:bg-purple-50">
                  <td className="px-4 py-3 text-black">{item.id}</td>
                  <td className="px-4 py-3 text-black">{item.id}</td>
                  <td className="px-4 py-3 text-black">{item.name}</td>
                  <td className="px-4 py-3 text-black font-medium">{item.value}</td>
                  <td className="px-4 py-3 text-text-black">{item.category}</td>
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