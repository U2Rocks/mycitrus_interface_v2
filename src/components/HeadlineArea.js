import { View, Text, StyleSheet } from 'react-native'
import HeadlineHeader from './HeadlineHeader'
import HeadlineRow from './HeadlineRow'
import design from '../constants/global'

// master component for headlines area

const HeadlineArea = () => {
  return (
    <View style={styles.container}>
      <HeadlineHeader />
      <HeadlineRow />
    </View>
  )
}

export default HeadlineArea

const styles = StyleSheet.create({
    container: {
        backgroundColor: design.COLOR_DARK_BLUE,
        flex: 1,
    }
})