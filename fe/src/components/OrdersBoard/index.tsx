import { useState } from "react";
import { Order } from "../../types/Order";
import { Board, OrdersContainer } from "./styles";
import { OrderModal } from "../Ordermodal";
import { api } from "../../utils/api";

interface OrdersBoardProps {
    icon: string;
    title: string;
    orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
    const [isLoading, setIsLoading] = useState(false)

    function handleOpenModal(order: Order) {
        setIsModalVisible(true);
        setSelectedOrder(order);
    }

    function handleCloseModal() {
        setIsModalVisible(false);
        setSelectedOrder(null);
    }

    async function handleCancelOrder() {
        setIsLoading(true)
        await api.delete(`/orders/${selectedOrder?._id}`)
        setIsLoading(false)
    }

    return (
        <Board>
            <OrderModal
                visible={isModalVisible}
                order={selectedOrder}
                onClose={handleCloseModal}
                onCancelOrder={handleCancelOrder}
                isLoading={isLoading}
            />
            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>({orders.length})</span>
            </header>
            {orders.length > 0 && (
                <OrdersContainer>
                    {orders.map((order) => (
                        <button type="button" key={order._id} onClick={() => handleOpenModal(order)}>
                            <strong>Mesa {order.table}</strong>
                            <span>{order.products.length} itens</span>
                        </button>
                    ))}
                </OrdersContainer>
            )}
        </Board>
    );
}

