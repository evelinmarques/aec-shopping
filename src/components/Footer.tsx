import useCart from "../hooks/useCart"

type PropsType = {
    viewCart: boolean,
}

const Footer = ({ viewCart }: PropsType) => {
    const { totalItems, totalPrice } = useCart()

    const year: number = new Date().getFullYear()

    const pageContent = viewCart ? (
        <p>AeC Shopping&copy; {year}</p>
      ) : (
        <p>Feito por Evelin Marques&copy; {year}</p>
      );

    const content = (
        <footer className="footer">
            {pageContent}
        </footer>
    )

    return content
}
export default Footer