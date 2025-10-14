import type { ItemListProps } from "../types";

type ItemProps = {
  item: ItemListProps;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
};

export default function Item({ item, onDeleteItem, onToggleItem }: ItemProps) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed} // ✅ use `checked` for checkboxes
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
