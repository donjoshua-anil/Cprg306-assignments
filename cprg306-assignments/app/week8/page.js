"use client";
import {useState} from "react";
import NewItem from "./NewItem";
import ItemList from "./item-list";
import MealIdeas from "./MealIdeas";

export default function Page(){
    const [items, setItems]= useState([]);
    const [selectedItemName, setSelectedItemName]= useState("");

    const handleAddItem= (newItem) =>{ setItems((prev)=> [...prev, newItem]);

    };
      const handleItemSelect= (item) => {
        const cleaned = item.name
        .split(",")[0]
        .replace(/[^\p{L}\p{N}\s]/gu, "")
      .trim();
    setSelectedItemName(cleaned);
  };
  
        return (
    <main className="min-h-screen bg-[#0a0f1e] flex flex-col items-center py-16 px-4">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-white mb-2">Shopping List</h1>
          <p className="text-slate-400 text-base">Week 8</p>
        </div>

           {/* Two-column layout */}
        <div className="flex gap-6 items-start">
          {/* Left column — form + list */}
          <div className="flex flex-col gap-6 flex-1">

          

            <NewItem onAddItem={handleAddItem} />
            <div className="mt-2">
              <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
          </div>

        {/* Right column — meal ideas */}
          <div className="flex-col">
            <MealIdeas ingredient={selectedItemName} />
          </div>
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