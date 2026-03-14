export default function Item({ name, quantity, category }) {
  return (
    <li className="flex items-center justify-betweenborder bg-black border-slate rounded-xl px-5 py-4 ">
      <div>
        <p className="text-lg font-semibold text-white capitalize">{name}</p>
        <p className="text-sm text-white capitalize">{category}</p>
      </div>
      <span className="text-sm font-medium text-white px-100 py-1">
        Qty: {quantity}
      </span>
    </li>
  );
}