export default function Item({ name, quantity, category }) {
  return (
    <li className="flex items-center justify-between rounded-lg bg-slate-600 px-4 py-2 ">
      <div>
        <p className="text-lg font-semibold text-slate-800 capitalize">{name}</p>
        <p className="text-sm text-black capitalize">{category}</p>
      </div>
      <span className="text-sm font-medium text-slate-700">
        Qty: {quantity}
      </span>
    </li>
  );
}