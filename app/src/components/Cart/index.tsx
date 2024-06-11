import { FlatList, TouchableOpacity } from "react-native";
import { CartItem } from "../../types/CartItem";
import { Text } from "../../components/Text";

import { Item,
    ProductContainer,
    Actions,
    Image,
    QuantityContainer,
    ProductsDetasils,
    Summary,
    TotalContainer
} from "./styles";
import React from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { MinusCircle } from "../Icons/MinusCircle";
import { Button } from "../Button";
import { Product } from "../../types/Product";


interface CartProps{
    cartItems: CartItem[];
    onAdd: (product: Product) => void;
    onDecrement: (product: Product) => void;

}

export function Cart({cartItems, onAdd, onDecrement} : CartProps){

    const total = cartItems.reduce((acc, cartItem) => {
        return acc + cartItem.quantity * cartItem.product.price;
    }, 0 )
    return(
        <>
           {cartItems.length > 0 && (
             <FlatList
             style={{marginBottom: 20, maxHeight:150}}
             data={cartItems}
             keyExtractor={cartItem => cartItem.product._id}
             showsVerticalScrollIndicator={false}
             renderItem={({item: cartItem}) => (
                 <Item>
                     <ProductContainer>
                         <Image  source={{ uri: `http://192.168.1.104:3001/uploads/${cartItem.product.imagePath}` }}/>
                         <QuantityContainer>
                         <Text size={14} color='#666'>
                             {cartItem.quantity}x
                         </Text>
                     </QuantityContainer>
                     <ProductsDetasils>
                         <Text size={14} weight='700'>
                             {cartItem.product.name}

                         </Text>
                         <Text size={14} color='#666' style={{marginTop: 4}}>{formatCurrency(cartItem.product.price)}</Text>
                     </ProductsDetasils>
                     </ProductContainer>


                     <Actions>
                         <TouchableOpacity style={{marginRight: 24}}
                            onPress={() => onAdd(cartItem.product)}
                         >
                             <PlusCircle/>
                         </TouchableOpacity>
                         <TouchableOpacity onPress={() => onDecrement(cartItem.product)}>
                             <MinusCircle/>
                         </TouchableOpacity>
                     </Actions>
                 </Item>
             )}
         />
           )}
            <Summary>
                <TotalContainer>
                    {cartItems.length > 0 ? (
                        <>
                            <Text color='#666'>Total</Text>
                            <Text size={20} weight='700'>{formatCurrency(total)}</Text>
                        </>
                    ) : (
                        <Text color='#999'>Seu carrinho está vazio</Text>
                    )}
                </TotalContainer>
                <Button
                    onPress={() => alert('pronto')}
                    disabled={cartItems.length === 0}
                >
                    Confirmar pedido
                </Button>
            </Summary>
        </>

    )
}
