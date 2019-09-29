/**
 * @flow
 */

import React,{Component} from 'react';
import { Button, ScrollView, View, Text,StyleSheet,Dimensions,Image,TouchableOpacity, TextInput, Platform, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { Container, Content,Header,Item,Input, Footer, FooterTab,Icon } from 'native-base';
import { connect } from 'react-redux';

var {height, width} = Dimensions.get('window');
import { verifyLogin } from './loginReducer';


class LoginScreen extends React.Component{
	constructor(props) {
    super(props);
    this.state = { username: '', password:'' };

    this.onLoginPress = this.onLoginPress.bind(this);
  }

	static navigationOptions={
		header:null
	};

	UNSAFE_componentWillReceiveProps(props){
		if(props.userAuth){
			this.props.navigation.navigate('Home');
		}
	}
	
	render(){
		return(
			<View style={styles.container}>
			    <ScrollView>
			    <View style={{height:height,width:width}}>

			    	<View style={styles.introcontainer}>
			     		<View style={styles.roundedcontainer}>
			     			<TextInput
				                  style={styles.textinput}
				                  autoFocus={false}
				                  placeholderTextColor={'#ccc'}
				                  selectionColor={'#7070D8'}
				                  placeholder={'Enter Username'}
				                  keyboardType='email-address'
				                  underlineColorAndroid={'transparent'}
				                  onChangeText={(username) => this.setState({username})}
				                />

				     		</View>
				                <View style={styles.roundedcontainer}>
						        <TextInput
						        keyboardType="default"
						        style={styles.textinput}
						        placeholderTextColor={'#ccc'}
				                selectionColor={'#7070D8'}
						        placeholder={'Enter Password'}
						        onChangeText={(password) => this.setState({password})}
						        value={this.state.password}
						        underlineColorAndroid={'transparent'}
						        secureTextEntry={true}
						        onBlur={ () => this.state.password.length && this.onLoginPress() }
						        />
						        </View>
					<View style={styles.buttonstyle}> 	        
				        <TouchableOpacity  onPress={this.onLoginPress} >
				        <Text  block style={{color:'#11127c', fontSize: 18,padding: 15,fontFamily:'Din Condensed', textAlign: 'center', fontWeight: '600'}} >Login</Text>
				        </TouchableOpacity>
				    </View>
	     		</View>   	
			    </View>
			  </ScrollView>
			</View>
		);
	}


  onLoginPress(){
  	console.log("here");
    const { verifyLogin } = this.props;
    verifyLogin(this.state.username, this.state.password);
  }
}

const styles=StyleSheet.create({
	container:{
		justifyContent:'space-between',
		flex:1,
		backgroundColor:'white',
	},
	imagecontainer:{
        width: width/1.5,
        justifyContent: 'center'
	},
	textinput: {
	    height: 40,
	    width: width/1.6,
	    padding: 10,
	    color: '#000',
	    fontFamily:'Din Condensed',
	    fontSize: 14,
	    fontWeight: '600',
	    textAlign: 'center'
	},
	
	introtext:{
		textAlign:'center',
		width:width/1.5,
		fontSize:17,
		color:'#000000',
	},
	introcontainer:{
		alignItems:'center',
		justifyContent:'space-around',
		paddingBottom: 100,
		marginTop: height/2
	},
	slide:{
	    width: width/1.3,
	    flex: 1,
	    flexDirection: 'column',
	    alignItems: 'center',
	    justifyContent: 'center',
	    alignSelf: 'center',

  },
  roundedcontainer:{
	  	height: height/12,
	    width: width/1.2,
	    borderColor: '#000000',
	    borderWidth: 1,
	    alignItems: 'center',
	    borderRadius: 25,
	    marginTop: 15,
	    paddingTop: 5,
	    paddingBottom: 5,
  },
  buttonstyle:{
	  	backgroundColor: '#ffcc00',
	  	borderColor: '#ffffff', 
	  	height: height/12,
	    width: width/1.2,
	    borderWidth: 1,
	    alignItems: 'center',
	    borderRadius: 25,
        marginTop: 15
  },

});

function mapStateToProps (state) {    
  return {
      userAuth: state.login_reducer.userAuth
  }
}
function mapDispatchToProps (dispatch) {    
  return {
    verifyLogin: (name, password) => dispatch(verifyLogin(name, password))
  }
}
export default connect(mapStateToProps,
                       mapDispatchToProps,
  )(LoginScreen)