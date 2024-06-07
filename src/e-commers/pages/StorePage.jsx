import { ProductContainer } from "../components/product/ProductContainer";

export function StorePage () {
    return (
        <div className="container mx-auto p-4 flex flex-col md:flex-row">
            <div className="bg-red-500">Menu de categorias</div>
            <ProductContainer />
        </div>
    )
}