
const defaultState = {
    loggedin: false,
    username: '',
    password: ''
  }
  

function reducer (prevState = defaultState, action){
    switch(action.type){
        case "CREATE_USER":
            // console.log(action.payload)
          return {...prevState, username: action.payload}
        // case "REMOVE_LIKE":
        //   return {...prevState, likes: prevState.likes - 1}
        // case "TOGGLE_DARK":
        //   return {...prevState, darkMode: !prevState.darkMode}
        // case "HANDLE_CHANGE":
        //   return {...prevState, text: action.payload}
        // case "ADD_THANG":
        //   return {...prevState, thangs: [...prevState.thangs, action.payload]}
        default:
          return prevState
    }
};
export default reducer;