import Product from '../Product/Product'
import './Catalog.css'

import { products } from '../../data.js'

export default function Catalog() {
    return (

        <>
            <div className="catalog">
                {products.map((product, id) => (
                    <Product key={id}{...product} />
                ))}
            </div>

        </>
    )
}
