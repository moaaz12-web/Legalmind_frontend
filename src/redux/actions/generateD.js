export const generateRequest = () => ({ type: 'GENERATE_REQUEST' });
export const generateSuccess = (val) => ({ type: 'GENERATE_SUCCESS', payload: val });
export const generateFail = (error) => ({ type: 'GENERATE_FAIL', payload: error });

export const generateD = (val) => async (dispatch) => {
    dispatch(generateRequest());
    try {
      dispatch(generateSuccess(val));
    } catch (error) {
      dispatch(generateFail(error));
    }
  };