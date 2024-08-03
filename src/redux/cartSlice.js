import { createSlice } from '@reduxjs/toolkit';

const loadCartFromSession = () => {
  const cartData = sessionStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : [];
};

const saveCartToSession = (cartItems) => {
  sessionStorage.setItem('cart', JSON.stringify(cartItems));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: loadCartFromSession(),
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveCartToSession(state.items);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
        saveCartToSession(state.items);
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartToSession(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToSession([]);
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
