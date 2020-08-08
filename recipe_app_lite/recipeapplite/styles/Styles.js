/* styles */

import {
    StyleSheet,
    StatusBar,
  
  } from 'react-native';

  export default StyleSheet.create({ 
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    heading: {
      fontSize: 22,
      textAlign: 'center',
      color: '#000000',
      marginBottom: 5,
    },
    item: {
      backgroundColor: '#F5F5F5',
      borderWidth: 4,
      borderColor: "#DCDCDC",
      borderRadius: 12,
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title:{
      fontSize: 18,
      color: '#5E5E5E',
    },
    rowTitle:{
      fontSize: 18,
      color: '#5E5E5E',
      width:240,
    },
    row:{
        fontSize: 14,
        flexDirection: 'row',
        justifyContent:'space-between',
        height:70,
        paddingLeft:20,
        paddingRight:20,
        alignItems:'center',
        backgroundColor: '#ececec',
    },
    ingredientlist: {
      fontSize: 11,
    },
    parentHr:{
        height:1,
        color: '#ffffff',
        width:'100%'
    },
    bodyTitle: {
      fontSize: 18,
      marginTop:5,
      marginBottom: 5,
      fontWeight: 'bold',
    },
    child:{
        backgroundColor: '#C7C7C7',
        padding:16,
    },
    profileImg: {
      height: 60,
      width: 60,
      borderRadius: 30,
    },
    mainImg: {
      height: 260,
      width: 380,
    },
    buttonColor: {
      backgroundColor: '#5E5E5E',
      color: '#ffffff',
      height: 40,
      width:380,
      borderRadius:10,
      marginTop :20
    },
    heavyTxt: {
      paddingTop: 20,
      paddingBottom: 10,
      color: '#000000',
      fontWeight: 'bold',
    },
    textInput: {
      height: 40,
      padding: 10,
      margin: 10,
      fontSize: 14,
      borderWidth: 1,
      borderRadius:10,
      paddingLeft: 10,
      borderColor: '#5E5E5E',
      backgroundColor: '#FFFFFF',
    },
    seperator: {
        height: 1,
        width: '86%',
        backgroundColor: '#CED0CE',
        marginLeft: '14%',
    },
    activity: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },

  });
