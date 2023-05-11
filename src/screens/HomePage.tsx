import { Center, Text, VStack } from "native-base";
import { Header } from "../components/Header";

export function HomePage () {
    return (
        <VStack flex={1} bg='fundo'>
            <Header />
            <Center>
                <Text>HomePage</Text>
            </Center>
        </VStack>
    );
}