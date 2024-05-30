import { Container } from "./styles";
import { Text } from "../../components/Text";


export function Header(){
    return(
        <Container>
            <Text size={14} opacity={0.9}>Bem-vindo(a) ao</Text>
            <Text size={24} wight='700'>
                WAITER
                <Text size={24}>APP</Text>
            </Text>
        </Container>
    )
}