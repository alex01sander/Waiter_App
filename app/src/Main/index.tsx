import { useState } from "react";
import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { TableModal } from "../components/TableModal";
import { Container, CategoriesContainer, MenuContainer, Footer, FooterContainer } from "./styles";
import { Cart } from "../components/Cart";
import { CartItem } from "../types/CartItem";
import products from "../mocks/products";

export function Main() {
    const [selectedTable, setSelectedTable] = useState('');
    const [isTableModalVisible, setIsTableModalVisible] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            quantity: 1,
            product: products[0]
        },
        {
            quantity: 1,
            product: products[1]
        }
    ])

    function handleSaveTable(table: string) {
        setSelectedTable(table);
        setIsTableModalVisible(false);
    }

    function handleCancelOrder(){
        setSelectedTable('')
    }

    return (
        <>
            <Container>
                <Header
                    setSelectedTable={selectedTable}
                    onCancelOrder={handleCancelOrder}
                />

                <CategoriesContainer>
                    <Categories />
                </CategoriesContainer>

                <MenuContainer>
                    <Menu />
                </MenuContainer>
            </Container>
            <Footer>
                <FooterContainer>
                    {!selectedTable && (
                        <Button onPress={() => setIsTableModalVisible(true)}>
                            Novo Pedido
                        </Button>
                    )}

                    {selectedTable && (
                        <Cart cartItems={cartItems}/>
                    )}
                </FooterContainer>
            </Footer>
            <TableModal
                onClose={() => setIsTableModalVisible(false)}
                visible={isTableModalVisible}
                onSave={handleSaveTable}
            />
        </>
    );
}
