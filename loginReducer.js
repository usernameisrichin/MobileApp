const LOGIN_VERIFY = 'LOGIN_VERIFY';

export default function login_reducer(state = [], action) {
  switch (action.type) {
    case LOGIN_VERIFY:
       var name = "Hruday@gmail.com";
       var password = 'hruday123';
       var userAuth = state.userAuth || false;
       console.log(action.name + action.password)
       if(action.name === name &&  action.password === password){
         userAuth = true;
       }
      return {
        ...state,
        userAuth: userAuth 
      };
    default:
      return state;
  }
}


export function verifyLogin(name, password) {    
    return {
        type: LOGIN_VERIFY,
        name,
        password,
    };
}

