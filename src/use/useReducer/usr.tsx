import { useReducer } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};
type Action =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: number } // product id
  | { type: "CLEAR_CART" };

function cartReducer(state: Product[], action: Action): Product[] {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}

const initialCart: Product[] = [];

export default function USR() {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const sampleProduct = { id: 1, name: "Apple", price: 2 };

  return (
    <div>
      <h2>Keranjang</h2>
      <ul>
        {cart.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
            <button
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: p.id })}
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => dispatch({ type: "ADD_ITEM", payload: sampleProduct })}
      >
        Tambah Apple
      </button>

      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Kosongkan Keranjang
      </button>
    </div>
  );
}
