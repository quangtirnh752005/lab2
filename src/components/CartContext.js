import { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (pizza) =>
    setItems((prev) => {
      const existed = prev.find((item) => item.id === pizza.id);
      if (existed) {
        return prev.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...pizza, quantity: 1 }];
    });

  const removeFromCart = (id) =>
    setItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    );

  const clearCart = () => setItems([]);

  const { totalItems, totalPrice } = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const money = items.reduce(
      (sum, item) => sum + (item.salePrice ?? item.price) * item.quantity,
      0
    );
    return { totalItems: count, totalPrice: Number(money.toFixed(2)) };
  }, [items]);

  const value = { items, addToCart, removeFromCart, clearCart, totalItems, totalPrice };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart phải được dùng bên trong <CartProvider>');
  }
  return context;
}
