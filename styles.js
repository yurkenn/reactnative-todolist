import { StyleSheet } from 'react-native'

export const appStlyes = StyleSheet.create({
    container: {
        marginTop: 25,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 30,

    },
    subtitle: {
        fontSize: 20,
        marginTop: 4,
        color: '#666',

    },
    input: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: "#ddd",
        fontSize: 18,
        marginTop: 10,
        borderRadius: 6,
        marginHorizontal: 15

    },
    buttonContainer: {
        backgroundColor: 'lightgreen',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 15,
        alignItems: 'center',
        marginTop: 8,
        alignSelf: 'flex-end'

    },
    buttonText: {
        fontSize: 18,

    },
    divider: {
        height: 1,
        backgroundColor: "#ddd",
        marginVertical: 32
    },
    taskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: "#ddd",
        marginHorizontal: 20

    },
    taskText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    taskDelete: {
        backgroundColor: 'red',
        width: 23,
        height: 23,
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center'
    },
    taskDeleteText: {
        fontSize: 18,
        color: 'white',


    },
});