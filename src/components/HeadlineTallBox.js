import { View, Text, StyleSheet, Image } from 'react-native'
import design from '../constants/global'
import { shrug } from '../images/imageExport'

// component that shows headline category/text and image

const HeadlineTallBox = ({ hText }) => {
  return (
    <View style={styles.container}>
        <View style={styles.tallheader}>
            <Text style={styles.topText}>{ hText }</Text>
        </View>
        <View style={styles.imageView}>
            <Image source={shrug} style={styles.image}/>
        </View>
    </View>
  )
}

export default HeadlineTallBox

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        marginHorizontal: 5,
        marginVertical: 7,
        backgroundColor: design.COLOR_BLACK,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    text: {
        color: design.COLOR_WHITE
    },
    tallheader: {
        backgroundColor: design.COLOR_BLACK,
        width: '100%',
        padding: 5,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    topText: {
        fontSize: 20,
        color: design.COLOR_WHITE,
    },
    image: {
        height: 193,
        width: 300,
    },
    imageView:{
    }
})