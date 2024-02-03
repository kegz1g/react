import Product from '../Product/Product'
import './Order.css'

import { products } from '../../data.js'

export default function Order() {
    return (

        <>
            <div className="catalog">
                {
                    <Product {...products[0]} />
                }{
                    <Product {...products[1]} />}
                {
                    <Product {...products[2]} />}



            </div>

        </>
    )
}
