import { useContext } from 'react';
import BasketContext from '../Context/BasketContext';

function BasketRow(props) {


    const { basket, setBasket } = useContext(BasketContext);

    function incHandler() {

        const tempBasket = [...basket];

        const index = tempBasket.findIndex((basketItem) => { return basketItem.name === props.elem.name })

        if (index > -1) {
            tempBasket[index].quantity = tempBasket[index].quantity + 1;
        }

        setBasket(tempBasket);
    }

    function decHandler() {

        const tempBasket = [...basket];

        const index = tempBasket.findIndex((basketItem) => { return basketItem.name === props.elem.name })

        if (index > -1) {
            tempBasket[index].quantity = tempBasket[index].quantity - 1;
        }

        if (tempBasket[index].quantity === 0) {
            tempBasket.splice(index, 1);
        }

        setBasket(tempBasket);
    }

    return <div>
        Name: <span>{props.elem.name}</span>
        Price: <span>{props.elem.price}</span>
        <button className='inc-dec-buttons' onClick={decHandler}>-</button>
        Quantity: <span>{props.elem.quantity}</span>
        <button className='inc-dec-buttons' onClick={incHandler}>+</button>
        Total Price: <span>{props.elem.price * props.elem.quantity}</span>
    </div>
}

export default BasketRow;