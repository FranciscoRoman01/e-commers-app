import { createContext, useContext, useReducer } from "react";

// Creamos el contexto del carrito de compras
const CartContext = createContext();

// Creamos este reducer, para el manejo de las acciones del carrito
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload.id);    
        default:
            return state;
    }
}

export function CartProvider({ children }){
    const [ cart, dispatch ] = useReducer(cartReducer, []);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);
