import {FormProduct} from "./FormProduct/FormProduct.tsx";
import {useState} from "react";
import {Header} from "./Header/Header.tsx";
import {ListProduct} from "./ListProduct/ListProduct.tsx";

interface ItemProduct {
    nombre: string;
    imagen: string;
    precio: number;
}

export const AppProduct = () => {

    const [products, setProducts] = useState<ItemProduct[]>([]);

    console.log(products);

    const handleAddProduct = (product: ItemProduct) => {
        setProducts([...products, product]);
    }

    return (
        <div>
            <Header/>
            <h2 className="text-center">Formulario</h2>
            <FormProduct handleAddProduct={handleAddProduct}/>

            <h2 className="text-center">Productos</h2>
            {products.length > 0 ? <ListProduct arrItems={products}/>: <h2>No hay productos</h2>}
        </div>
    )
}