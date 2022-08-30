import { View, Text, StyleSheet} from 'react-native'
import design from '../constants/global'

const HeadlineHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recent Headlines</Text>
    </View>
  )
}

export default HeadlineHeader

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    text: {
        fontSize: 35,
        color: design.COLOR_WHITE,
        letterSpacing: 2,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})