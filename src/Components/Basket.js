import { useContext } from "react";
import BasketContext from "../Context/BasketContext";
import BasketRow from "./BasketRow";

function Basket() {

    const { basket, setBasket } = useContext(BasketContext);

    let basketTotal = 0;

    for (let i = 0; i < basket.length; i++) {
        basketTotal = basketTotal + (basket[i].price * basket[i].quantity)
    }

    function handleSatinAlClick() {
        setBasket([]);
    }


    return <div>
        <h1>Sepetiniz</h1>
        {basket.length > 0 ?
            basket.map((basketItem) => { return <BasketRow key={basketItem.id} elem={basketItem} /> })
            : <div>Sepetiniz henüz boş</div>}
        <div>Sepet toplamı: {basketTotal}</div>
        <button disabled={basket.length < 1} onClick={handleSatinAlClick}>Satın Al</button>
    </div>
}

export default Basket;