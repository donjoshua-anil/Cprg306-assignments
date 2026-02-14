"use client";

import { useState } from "react";
export default function NewItem(){
    const [name, setName]= useState("");
    const[quantity, setQuantity]= useState(1)
    const [category, setCategory]= useState("produce");

    const handleSubmit= (event)=>{
        event.preventDefault();

        const item={
            name,quantity,category,
        };

    console.log(item);

    alert(`Added: ${name}, quantity: ${quantity}, category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
    
    };

    return (
    <form
    onSubmit={handleSubmit}
    className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg"
    >
    <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Add New Item
    </h2>

      {/* Name Field */}
    <div className="mb-4">
        <label htmlFor="name" className="block bold text-black mb-2 font-medium">
          Item Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter item name"
          className="w-full p-3 rounded-md text-black border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Quantity and Category Row */}
      <div className="flex gap-4 mb-6">
        {/* Quantity Field */}
        <div className="flex-1">
          <label htmlFor="quantity" className="block text-gray-700 mb-2 font-medium">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full p-2 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Field */}
        <div className="flex-1">
          <label htmlFor="category" className="block text-gray-700 mb-2 font-medium">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 rounded-md border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200"
      >
        +
      </button>
    </form>
  );
}