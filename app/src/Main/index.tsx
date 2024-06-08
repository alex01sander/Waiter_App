import { useState } from "react";
import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { TableModal } from "../components/TableModal";
import { Container, CategoriesContainer, MenuContainer, Footer, FooterContainer } from "./styles";

export function Main() {
    const [selectedTable, setSelectedTable] = useState('');
    const [isTableModalVisible, setIsTableModalVisible] = useState(false);

    function handleSaveTable(table: string) {
        setSelectedTable(table);
        setIsTableModalVisible(false);
    }

    return (
        <>
            <Container>
                <Header />

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
