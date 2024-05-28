import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";

import {  Container } from "./styles";

const orders: Order[] = [{
    "_id": "66510a9ee6de4917b463c185",
    "table": "123",
    "status": "WAITING",
    "products": [
        {
            "product": {
                "name": "Pizza Quatro Queijos",
                "imagePath": "1715023697482-quatro-queijos.png",
                "price": 20,  // Corrigir "Price" para "price"

            },
            "quantity": 2,
            "_id": "66510a9ee6de4917b463c186"
        },
        {
            "product": {
                "name": "Pizza Quatro Queijos",
                "imagePath": "1715023697482-quatro-queijos.png",
                "price": 20,  // Corrigir "Price" para "price"

            },
            "quantity": 2,
            "_id": "66510a9ee6de4917b463c186"
        },
    ]
}];



export function Orders(){
    return(
        <Container>
            <OrdersBoard
                icon="🕛"
                title="Fila de espera"
                orders={orders}

            />

            <OrdersBoard
            icon="🧑‍🍳"
            title="Em preparação"
            orders={[]}
            />

            <OrdersBoard
            icon="✅"
            title="Pronto!"
            orders={[]}
            />

        </Container>
    )
}
