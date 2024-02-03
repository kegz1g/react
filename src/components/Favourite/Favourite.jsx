import Product from '../Product/Product'
import './Favourite.css'

import { products } from '../../data.js'

export default function Favourite() {
    return (

        <>
            <div className="catalog">
                {
                    <Product {...products[0]} />
                }
                {
                    <Product {...products[3]} />}



            </div>

        </>
    )
}
