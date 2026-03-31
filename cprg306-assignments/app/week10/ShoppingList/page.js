"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../context/AuthContext";
import NewItem from "../NewItem";
import ItemList from "../item-list";
import MealIdeas from "../MealIdeas";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (user === null) {
      router.push("/week9");
    }
  }, [user, router]);

  // Load items from Firestore when user is available
  const loadItems = async () => {
    const fetchedItems = await getItems(user.uid);
    setItems(fetchedItems);
  };

  useEffect(() => {
    if (user) loadItems();
  }, [user]);

  if (!user) return null;

  // Updated to save to Firestore and use returned id
  const handleAddItem = async (newItem) => {
    const id = await addItem(user.uid, newItem);
    setItems((prev) => [...prev, { id, ...newItem }]);
  };

  const handleItemSelect = (item) => {
    const cleaned = item.name
      .split(",")[0]
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .trim();
    setSelectedItemName(cleaned);
  };

  async function handleSignOut() {
    try {
      await firebaseSignOut();
      router.push("/week9");
    } catch (error) {
      console.error("Sign-out failed:", error);
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0f1e] flex flex-col items-center py-16 px-4">
      <div className="w-full max-w-6xl">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-white mb-2">Shopping List</h1>
          <p className="text-slate-400 text-base">Week 9</p>
        </div>

        {/* User bar */}
        <div className="flex items-center justify-between bg-[#111827] rounded-xl px-5 py-3 mb-8">
          <p className="text-slate-300 text-sm">
            Signed in as{" "}
            <span className="text-white font-semibold">{user.displayName}</span>
          </p>
          <button
            onClick={handleSignOut}
            className="text-slate-400 hover:text-white text-sm underline transition-colors"
          >
            Sign Out
          </button>
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
          <a href="/week9" className="text-blue-400 hover:text-blue-300 underline transition-colors text-sm">
            ← Back to Home
          </a>
        </div>

      </div>
    </main>
  );
}