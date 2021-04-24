import { formatPrice } from '../../helpers/helpers';


type Props = {
    amount: number;
    totalPrice: number;
    onSubmit: () => void;
}
function Steps({amount, totalPrice, onSubmit}: Props){      
      return (
        <div className="order-summary-container">
            <div className="order-summary-content">
                <div>
                    <span className="amount-selected-container">
                        <strong className="amount-selected">{amount}</strong>
                        EVENTOS SELECIONADOS
                    </span>
                    <span className="order-summary-total">
                        <strong className="amount-selected">{formatPrice(totalPrice)}</strong>
                        VALOR TOTAL
                    </span>
                </div>
                
                <button
                    onClick={onSubmit} 
                    className="order-summary-make-order">   
                    FINALIZAR COMPRA
                </button>            
            </div>
        </div>
    )
}

export default Steps;