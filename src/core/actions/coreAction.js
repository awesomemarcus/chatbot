import chatbot from '../../../config';

export function askBot(msgObj, elm) {
  return (dispatch) => {
    dispatch({ type: 'APPEND_MESSAGE', msgObj });
    setTimeout(() => {
      elm.scrollIntoView();
    }, 500);

    chatbot.textRequest(msgObj.message)
        .then((response) => {
          console.log(response);
          const { result: { fulfillment: { speech } } } = response;
          dispatch({ type: 'APPEND_MESSAGE', msgObj: { message: speech, direction: 'left' } });

          elm.scrollIntoView();
    
        })
        .catch((e) => {
          console.log(e);
        });
  };
}
