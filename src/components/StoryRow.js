import { View, Text, StyleSheet, ScrollView } from 'react-native'
import StoryBox from './StoryBox'
import design from '../constants/global'

const StoryRow = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <StoryBox />
        <StoryBox />
        <StoryBox />
        <StoryBox />
      </ScrollView>
    </View>
  )
}

export default StoryRow

const styles = StyleSheet.create({
  container: {
    backgroundColor: design.COLOR_LIGHT_ORANGE,
    width: '100%',
    padding: 10,
    marginVertical: 10,
  }
})