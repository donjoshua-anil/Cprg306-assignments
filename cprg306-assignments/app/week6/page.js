"use client";
import {useState} from "react";
import NewItem from "./NewItem";
import ItemList from "./item-list";

export default function Page(){
    const [items, setItems]= useState([]);

    const handleAddItem= (newItem) =>{ setItems((prev)=> [...prev, newItem]);

    };

   
        return (
            <main className="min-h-screen bg-slate-950 flex items-center justify-center p-8">
            <div className="w-full max-w-2xl">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-white mb-2">
                    Shopping List
                    </h1>
                    <p className="text-slate-400 text-lg">
                    week 6 

                    </p>
                </div>
                
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} />
                
                <div className="mt-8 text-center">
                    <a 
                    href="/"
                    className="text-blue-400 hover:text-blue-300 underline transition-colors">
                    
                    ← Back to Home
                    </a>
                </div>
            </div>
            </main>
    );
}