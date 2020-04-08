export const _UPDATE_FORM_INPUT = 'UPDATE_FORM_INPUT';

export const updateForm = (input, value, isValid, message) => {
  return {
    type: _UPDATE_FORM_INPUT,
    input,
    value,
    isValid,
    message,
  };
};
