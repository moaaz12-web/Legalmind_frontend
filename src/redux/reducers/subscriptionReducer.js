const generatedReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SUBSCRIPTION_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'SUBSCRIPTION_SUCCESS':
        return {
          ...state,
          loading: false,
          val: action.payload,
        };
      case 'SUBSCRIPTION_FAIL':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
  
      default:
        return state;
    }
  };
  
  export default generatedReducer;
  