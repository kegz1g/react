import './Basket.css'
import ProductBasket from '../ProductBasket/ProductBasket'
import { products } from '../../data'


export default function Basket() {
    function mod() {

        let modal = document.getElementById('modal');
        modal.classList.toggle('hidden');
    }
    // const CloseModal = () => {
    //     let modal = document.querySelector('.basket-back')
    //     let modal_block = document.querySelector('.basket')

    //     modal.style.background = "#00000000"
    //     modal_block.style.right = "-100%"
    //     setTimeout(() => {
    //         modal.style.display = "none"
    //     }, 300)
    // };
    return (
        <>
            <div className="basket-back hidden" id='modal'>
                <div className="basket"><div className="zag">
                    <h1>Корзина</h1><p  onClick={mod} id='close'>⨉</p></div>
                    <div className="basket-items">
                        {
                            <ProductBasket {...products[0]} />
                        }
                        {
                            <ProductBasket {...products[1]} />
                        }
                        {
                            <ProductBasket {...products[2]} />
                        }

                    </div>
                </div>
            </div>


        </>
    )
}
