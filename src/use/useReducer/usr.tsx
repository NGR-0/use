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

type CartItem = {
  product: Product;
  quantity: number;
};

function cartReducer(state: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.find(
        (item) => item.product.id === action.payload.id,
      );
      if (existing) {
        return state.map((item) =>
          item.product.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...state, { product: action.payload, quantity: 1 }];
      }
    }

    case "REMOVE_ITEM": {
      return state.flatMap((item) => {
        if (item.product.id === action.payload) {
          if (item.quantity > 1) {
            return [{ ...item, quantity: item.quantity - 1 }];
          } else {
            return []; // hapus item kalau quantity tinggal 1
          }
        }
        return [item];
      });
    }

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
}

const initialCart: CartItem[] = [];

export default function USR() {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const sampleProduct = { id: 1, name: "Apple", price: 2 };

  return (
    <div>
      <h2>Keranjang</h2>
      <ul>
        {cart.map(({ product, quantity }) => (
          <li key={product.id}>
            {product.name} - {quantity}x - ${product.price * quantity}
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: product.id })
              }
            >
              Hapus Satu
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
