import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    message:{
        fontSize: 50,
        fontWeight: 500,
        color: 'white'
    },
    containerHeader:{
        flex: 0.2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D2691E',
    },
    containerForm:{
        flex: 1.0,
        width: '100%',
        paddingHorizontal: 40,
        alignItems: 'start',
        justifyContent: 'center',
        marginTop: '-55px'
    },
    label:{
        marginTop: 50,
        fontSize: 20,
        fontWeight: 600,
        color: '#D2691E'
    },
    input:{
        fontSize: 20,
        fontWeight: 600,
        width: '100%',
        borderBottomWidth: '1px',
        borderBottomColor: '#D2691E',
        color: '#D2691E',
        outline: 'none',
        outlineStyle: 'none'
    },
    containerButtons:{
        flex: 0.3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D2691E'
    },
    buttonLogin:{
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1,
        paddingTop: 5,
        paddingBottom: 8,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 30,
    },
    buttonLoginText:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    }
})