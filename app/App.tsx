import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Text } from './src/components/Text';

export default function App() {

    const [isFontLoaded] = useFonts({
        'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
        'GeneralSans-500': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
        'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Bold.otf')
    })

    if(!isFontLoaded){
        return null;
    }

  return (
    <View style={styles.container}>
      <Text size={24} weight={600}>teste</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
