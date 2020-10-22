const key = ''
const url = `https://cloud.iexapis.com/stable/tops?token=${key}`;

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(setLoading())
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "FETCH_DATA", payload: data });
    dispatch(setLoading())
  };
};

export const setNext = () => {
  return {
    type: "SET_NEXT",
  };
};

export const setPrev = () => {
  return {
    type: "SET_PREV",
  };
};

export const setColumns = (chlen) => {
  return {
    type: "SET_COLUMNS",
    payload: chlen
  };
};

export const setSelected = (symbol) => {
    return {
        type: "SET_SELECTED",
        payload: symbol
    }
}

export const setLoading = () => {
  return{
    type: 'SET_LOADING'
  }
}