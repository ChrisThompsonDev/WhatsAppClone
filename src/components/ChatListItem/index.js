import { Text, View, Image, StyleSheet } from 'react-native';

const ChatListItem = () => {
    return (
        <View style={styles.container}>
            <Image 
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtLFlEKjQHLInSZGzlfwIAnCrqCOF3chDGhR6ZKfSw&s' }} 
            style={styles.image}
            />
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text numberOfLines={1} style={styles.name}>Lukas</Text>
                    <Text style={styles.subtitle}>8:30</Text>
                </View>
                
                <Text numberOfLines={2} style={styles.subtitle}>Hello There. dsfgaerngvlrng;ndvnrgou uhrugipeergiuisdhfvl irhilshfklgdislhfg Hello There. dsfgaerngvlrng;ndvnrgou uhrugipeergiuisdhfvl irhilshfklgdislhfg</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,

        height: 70,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    content: {
        flex: 1,

        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'gray',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    name: {
        flex: 1,
        fontWeight: 'bold',
    },
    subtitle: {
        color: 'gray',
    }
})

export default ChatListItem;