import Nav from "./Nav"
import useCart from "../hooks/useCart"
import imageSrc from "../images/headereac.png";


type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({ viewCart, setViewCart }: PropsType) => {
    const { totalItems, totalPrice } = useCart()

    const content = (
        <header className="header">
            <div className="header__title-bar">
                <img src={imageSrc} style={{ maxWidth: '20%', height: 'auto%' }} alt="AeC Shopping" />
                <div className="header__price-box">
                    <p>Total de Itens: {totalItems}</p>
                    <p>Preço Total: {totalPrice}</p>
                </div>
            </div>
            <Nav viewCart={viewCart} setViewCart={setViewCart} />
        </header>
    )

    return content
}
export default Header