import { FlatList } from "react-native";
import { products } from '../../mocks/products'
import { Text } from "../../components/Text";
import { Product, ProductDetails, Image, ProductImage } from "./styles";


export function Menu(){
    return(
        <FlatList
          data={products}
          style={{marginTop: 32}}
          contentContainerStyle={{ paddingHorizontal: 24 }}
          keyExtractor={product => product._id}
          renderItem={( {item: product} ) => (
            <Product>
                <ProductImage
                    source={{
                        uri: `http://192.168.1.104:3001/uploads/${product.imagePath}`

                    }}
                />
                <ProductDetails>
                    <Text>{product.name}</Text>
                    <Text>{product.description}</Text>
                    <Text>{product.price}</Text>
                </ProductDetails>
            </Product>
          )}
        />
    )
}
