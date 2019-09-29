import React,{Component} from 'react';
import { ScrollView, 
			View, 
			Text,
			StyleSheet,
			Dimensions,
			TouchableOpacity,
			TextInput,
      FlatList
		} from 'react-native';
var {height, width} = Dimensions.get('window');
import { Card } from 'native-base'
import { connect } from 'react-redux';
import { getDetails } from './reducer';


class HomeScreen extends Component{
	static navigationOptions = {
    title: 'Home',
  };
  constructor(props){
    super(props);
    this.state={
      user:[{ 
         "id":1, 
         "name":"test1", 
         "age" : "11", 
         "gender":"male", 
         "email" : "test1@gmail.com", 
         "phoneNo" : "9415346313" }, 
       { "id" : 2, 
          "name":"test2", 
          "age" : "12", 
          "gender":"male", 
          "email" : "test2@gmail.com", 
          "phoneNo" : "9415346314" }, 
        {  "id":3, 
          "name":"test3", 
          "age" : "13", 
          "gender":"male", 
          "email" : "test3@gmail.com", 
          "phoneNo" : "9415346315" }, 
        { "id":4, 
          "name":"test4", 
          "age" : "14", 
          "gender":"male", 
          "email" : "test4@gmail.com", 
          "phoneNo" : "9415346316" }, 
        { "id":5, 
          "name":"test5", 
          "age" : "15", 
          "gender":"male", 
          "email" : "test5@gmail.com", 
          "phoneNo" : "9415346317" }, 
        { "id":6, 
          "name":"test6", 
          "age" : "16", 
          "gender":"male", 
          "email" : "test6@gmail.com", 
          "phoneNo" : "9415346318" } 
] 

    };
    
  }

  renderData(list){
    return(
      <View style={ styles.sportview}>
        <View style={{ flex: 1, flexDirection: 'column', }}>
          <Text  style={styles.headblack} >{list.name.toUpperCase()} </Text>
          <View style={{ flex: 1, flexDirection: 'row', paddingLeft: width/20,paddingRight: width/20, paddingBottom: 3,}}>
            <Text  style={styles.headstatus} >Age: {list.age}</Text>
            <Text  style={styles.header} >Gender: {list.gender}</Text>  
          </View>
          <View style={{ flex: 1, flexDirection: 'row', paddingLeft: width/20,paddingRight: width/20, paddingBottom: 3,}}>
            <Text  style={styles.head} >{list.email}</Text>
            <Text style={styles.headermobile}>Mobile: {list.phoneNo}</Text>
          </View>                     
        </View>
      </View>
      )
  }
  
  
  render(){
  	
  	return(
  		<ScrollView style={{flex: 1}}>
  		  <FlatList
              data={this.state.user}
              renderItem={({item})=>this.renderData(item)}
              keyExtractor={item => item.id}
              bounces={false}

            />
  		</ScrollView>
  		)
  }
}
const styles = StyleSheet.create({
	 sportview: {
      marginTop: 5,
      elevation:5,
      backgroundColor:'#333333',
      marginLeft:10,
      marginRight:10,
      marginBottom:5,
      borderRadius:2,
      paddingLeft:width/25,
      paddingRight:width/25,
      paddingTop:width/25,
      paddingBottom: width/25
  },
  headblack: {
      color: '#FDD60B',
      letterSpacing: 1,
      flex: 1,
      textAlign: 'center',
      justifyContent: 'center',
      fontWeight: '600',
      fontSize: 14,
  },
  headstatus: {
      color: '#FFFFFF',
      letterSpacing: 1,
      flex: 1,
      textAlign: 'left',
      justifyContent: 'center',
      fontWeight: '600',
      fontSize: 12,
  },
  header: {
      fontSize: 12,
      fontWeight: '600',
      flex: 1,
      justifyContent: 'space-between',
      textAlign: 'right',
      color: '#FFFFFF'
  },  
  head: {
      fontWeight: '600',
      color: '#FA87B2',
      letterSpacing: 1,
      flex: 1,
      textAlign: 'left',
      justifyContent: 'center',
      fontSize: 12,
  },
  headermobile: {
      color: '#FFFFFF',
      fontSize: 13,
      fontWeight: '600',
      justifyContent: 'space-between',
      textAlign: 'right',
  },
})

function mapStateToProps (state) {    
  return {
  }
}
function mapDispatchToProps (dispatch) {    
  return {
    
  }
}
export default connect(mapStateToProps,
                       mapDispatchToProps,
  )(HomeScreen)