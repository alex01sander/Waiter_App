import { ModalBody, OrderDetails, Overlay } from "./styles";
import closeIcon from '../../assets/images/close-icon.svg'
import { Order } from "../../types/Order";
interface OrderModalPropd{
    visible: boolean;
    order: Order | null;
    onClose: () => void;
}

export function OrderModal({visible, order, onClose }: OrderModalPropd) {

    if(!visible || !order){
        return null;
    }

    return(
        <Overlay>
           <ModalBody>
                <header>
                    <strong>Mesa {order.table}</strong>

                    <button type="button"><img src={closeIcon} alt="closeIcon"  onClick={onClose}/>
                    </button>
                </header>

                <div className="status-container">
                    <small>Status do Pedido</small>
                    <div>
                        <span>
                            {order.status === 'WAITING' && '🕛'}
                            {order.status === 'IN_PRODUCTION' && '🧑‍🍳'}
                            {order.status === 'DONE' && '✅'}
                        </span>
                        <strong>
                        <span>
                            {order.status === 'WAITING' && 'Fila de espera'}
                            {order.status === 'IN_PRODUCTION' && 'Em produção'}
                            {order.status === 'DONE' && 'Pronto'}
                        </span>

                        </strong>
                    </div>
                </div>
                <OrderDetails>
                    <strong>Itens</strong>
                </OrderDetails>
           </ModalBody>
        </Overlay>
    )
}
