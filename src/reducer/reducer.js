const initialState = {
  data: [],
  page: [],
  from: 0,
  to: 10,
  selected: '',
  isLoading: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA": {
      return {
        ...state,
        data: action.payload,
        page: action.payload.slice(state.from, state.to),
        isLoading: !state.isLoading
      };
    }
    case "SET_NEXT": {
      return{
        ...state,
        from: state.from + 10,
        to: state.to + 10,
        page: state.data.slice(state.from + 10, state.to + 10)
      }
    }
    case "SET_PREV": {
      return{
        ...state,
        from: state.from -10,
        to: state.to -10,
        page: state.data.slice(state.from - 10, state.to - 10)
      }
    }
    case "SET_COLUMNS": 
      return{
        ...state,
        page:action.payload
      } 
      case "SET_SELECTED": 
      return{
        ...state,
        selected: action.payload
      } 

    default:
      return { ...state };
  }
};
