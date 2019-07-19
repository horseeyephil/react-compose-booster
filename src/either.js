const either = (testFn, Option = null) => Component =>
  function maybeRendered(props) {
    const Branch = Option ? Option(props) : null;
    return testFn(props) ? Component(props) : Branch;
  };

export default either;