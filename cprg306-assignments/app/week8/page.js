"use client";
import {useState} from "react";
import NewItem from "./NewItem";
import ItemList from "./item-list";

export default function Page(){
    const [items, setItems]= useState([]);

    const handleAddItem= (newItem) =>{ setItems((prev)=> [...prev, newItem]);

    };

   
        return (
    <main className="min-h-screen bg-[#0a0f1e] flex flex-col items-center py-16 px-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-white mb-2">Shopping List</h1>
          <p className="text-slate-400 text-base">Week 7</p>
        </div>

        {/* Form Card */}
        <NewItem onAddItem={handleAddItem} />

        {/* List */}
        <div className="mt-6">
          <ItemList items={items} />
        </div>

        <div className="mt-10 text-center">
          <a href="/" className="text-blue-400 hover:text-blue-300 underline transition-colors text-sm">
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}