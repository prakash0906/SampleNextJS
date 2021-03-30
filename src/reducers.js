const reducer = (state = {}, action) => {
    switch (action.type) {
       case 'UPDATE_USERNAME':
          return { ...state, user_name: action.payload };
       default:
          return state;
     }
  };
  export default reducer;