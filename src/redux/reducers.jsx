const initialState = {
    updatedTitle: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_TITLE':
        return { ...state, updatedTitle: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  