import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Header from '../src/components/Header'
import SearchBar from '../src/components/SearchBar'
import StoryRow from '../src/components/StoryRow'
import design from '../src/constants/global'
import HeadlineArea from '../src/components/HeadlineArea'

// same as previous iteration in header/searchbar/storyrow
// new designs for footer/headline_section/status bar

const HomeScreen2 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBar />
      <StoryRow />
      <HeadlineArea />
    </SafeAreaView>
  )
}

export default HomeScreen2

const styles = StyleSheet.create({
    container: {
      backgroundColor: design.COLOR_LIGHT_ORANGE,
      flex: 1,
    }
  })