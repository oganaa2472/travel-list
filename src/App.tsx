import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import type { ItemListProps } from "./types"; // 👈 import your item type

export default function App() {
  const [items, setItems] = useState<ItemListProps[]>([]); // ✅ typed state

  // Add item
  function handleAddItems(item: ItemListProps) {
    setItems((prev) => [...prev, item]);
  }

  // Delete item by id
  function handleDeleteItem(id: number) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  // Toggle packed status
  function handleToggleItem(id: number) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // Clear all items
  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to delete all items?");
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
