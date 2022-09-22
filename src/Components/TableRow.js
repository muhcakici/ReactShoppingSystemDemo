import { useContext } from 'react';
import BasketContext from '../Context/BasketContext';

function TableRow(props) {


    const { basket, setBasket } = useContext(BasketContext);

    function handleSepeteEkleClick() {
        const tempBasket = [...basket];

        const index = tempBasket.findIndex((basketItem) => { return basketItem.name === props.elem.name })

        if (index > -1) {
            tempBasket[index].quantity = tempBasket[index].quantity + 1;
        } else {
            tempBasket.push({ name: props.elem.name, price: props.elem.price, quantity: 1, id: props.elem.id });
        }

        setBasket(tempBasket);
    }

    return <tr>
        <td>{props.elem.name}</td>
        <td>{props.elem.price}</td>
        <td><button className='sepete-ekle-button' onClick={handleSepeteEkleClick}>Sepete Ekle</button></td>
    </tr>
}

export default TableRow;