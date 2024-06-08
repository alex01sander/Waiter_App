import { FlatList, TouchableOpacity } from "react-native";
import { CartItem } from "../../types/CartItem";
import { Text } from "../../components/Text";

import { Item, ProductContainer, Actions, Image, QuantityContainer, ProductsDetasils } from "./styles";
import React from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { MinusCircle } from "../Icons/MinusCircle";

interface CartProps{
    cartItems: CartItem[];
}

export function Cart({cartItems} : CartProps){
    return(
        <FlatList
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
                        <TouchableOpacity style={{marginRight: 24}}>
                            <PlusCircle/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MinusCircle/>
                        </TouchableOpacity>
                    </Actions>
                </Item>
            )}
        />
    )
}
