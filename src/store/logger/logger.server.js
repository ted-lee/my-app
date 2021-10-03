
export default function createLogger() {
  // eslint-disable-next-line no-unused-vars
  return store => (next) => (action) => {

    console.log(` * ${action.type}: ${action.payload}`); // eslint-disable-line no-console

    return next(action);
  };
}
