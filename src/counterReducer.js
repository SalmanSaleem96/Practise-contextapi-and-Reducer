const counterReducer = (state, action) => {
  switch (action) {
    case 'INCREMENT':
      return state + 2
  }
}
export default counterReducer;