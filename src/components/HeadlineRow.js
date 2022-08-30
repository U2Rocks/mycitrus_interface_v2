import { View, Text, ScrollView, StyleSheet } from 'react-native'
import HeadlineTallBox from './HeadlineTallBox'

// scrolling row that contains headline boxes

const HeadlineRow = () => {

    const longTitle = "this title is extremely long for no particular reason and might cause issues with some formatting"


  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HeadlineTallBox hText={longTitle}/>
        <HeadlineTallBox hText={longTitle}/>
        <HeadlineTallBox hText="Sample Tooxt3"/>
        <HeadlineTallBox hText="Sample Tooxt4"/>
        <HeadlineTallBox hText="Sample Tooxt5"/>
        <HeadlineTallBox hText="Sample Tooxt6"/>
      </ScrollView>
    </View>
  )
}

export default HeadlineRow

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 20,
        padding: 5,
    }
})