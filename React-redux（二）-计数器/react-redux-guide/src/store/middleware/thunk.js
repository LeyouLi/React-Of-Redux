// eslint-disable-next-line import/no-anonymous-default-export
export default ({ dispatch }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch);
  }
  next(action);
}