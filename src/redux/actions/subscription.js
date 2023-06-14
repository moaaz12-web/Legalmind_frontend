export const subscriptionRequest = () => ({ type: 'SUBSCRIPTION_REQUEST' });
export const subscriptionSuccess = (val) => ({ type: 'SUBSCRIPTION_SUCCESS', payload: val });
export const subscripitonFail = (error) => ({ type: 'SUBSCRIPTION_FAIL', payload: error });

export const subscriptionAction = (val) => async (dispatch) => {
    dispatch(subscriptionRequest());
    try {
      dispatch(subscriptionSuccess(val));
    } catch (error) {
      dispatch(subscripitonFail(error));
    }
  };