import { useCart } from "../../context/ContextCart"

export function CartPage () {
    const { cart } = useCart();
    
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold">Shopping Cart</h1>
            {
                cart.length === 0 ?
                    (
                        <p className="text-xl mt-4">Your cart is empty.</p>
                    ) : (
                        <p>{JSON.stringify(cart)}</p>
                    )
            }
        </div>
    )
}