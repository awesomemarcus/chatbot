export default (state = [], action) => {
  switch (action.type) {
    case 'APPEND_MESSAGE':
      return Object.assign({}, state, {
        messages: state.messages ? [action.msgObj, ...state.messages] : Array(action.msgObj),
      });

    default:
      return state;
  }
};
