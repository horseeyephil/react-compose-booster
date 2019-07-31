import getNull from '../getNull/getNull';

const either = (testFn, Option = getNull) => Component =>
  function MaybeRendered(props) {
    const branch = testFn(props) ? Component : Option;
    return branch(props);
  };

export default either;