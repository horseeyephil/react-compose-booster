const plog = (message = '') => data => {
  Promise.resolve(data)
  .then(res => console.log(`${message} `, res));
  return data;
}

export default plog;