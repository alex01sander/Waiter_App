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
                "imagePath": "1715024055365-quatro-queijos.png",
                "price": 20,

            },
            "quantity": 2,
            "_id": "66510a9ee6de4917b463c186"
        },
        {
            "product": {
                "name": "Cerveja",
                "imagePath": "1715025541407-cerveja.png",
                "price": 60,

            },
            "quantity": 5,
            "_id": "66510a9ee6de4917b463c187"
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
