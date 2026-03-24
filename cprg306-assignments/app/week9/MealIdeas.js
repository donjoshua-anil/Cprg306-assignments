"use client";
import {useState, useEffect} from "react";

async function fetchMealIdeas(ingredient){
    const res= await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data= await res.json();
    return data.meals || [];

}

export default function MealIdeas({ingredient}){
    const[meals, setMeals] = useState([]);

    async function loadMealIdeas() {
    const results = await fetchMealIdeas(ingredient);
    setMeals(results);
    }

useEffect(() => {
    if (ingredient) loadMealIdeas();
}, [ingredient]);

return (
    <div className="bg-white rounded-2xl p-8 w-full shadow-xl h-full">
    <h2 className="text-2xl font-bold text-slate-800 mb-6">
        {ingredient ? `Meal Ideas for "${ingredient}"` : "Meal Ideas"}
    </h2>

    {!ingredient && (
        <p className="text-slate-400 text-sm">
        Click an item in your list to see meal ideas.
        </p>
    )}

    {ingredient && meals.length === 0 && (
        <p className="text-slate-400 text-sm">No meals found for this ingredient.</p>
    )}

    <ul className="flex flex-col gap-3">
        {meals.map((meal) => (
        <li key={meal.idMeal} className="flex items-center gap-3">
            <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-12 h-12 rounded-lg object-cover"
            />
            <span className="text-slate-700 font-medium">{meal.strMeal}</span>
        </li>
        ))}
    </ul>
    </div>
);
}