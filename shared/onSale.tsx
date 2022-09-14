import { FunctionComponent } from "react"

interface OnSaleProps {
    amount: number;
}

const OnSale: FunctionComponent<OnSaleProps> = ({ amount }) => {
    return amount > 0 ?
        (<h3>{amount}% Off! Buy it Now!</h3>)
        : (<></>);


}

export default OnSale;