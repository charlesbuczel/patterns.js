//Module

//example

const customModule = (() => {
  let privateVariable = 'foo';

  let privateFunction = (value) => {
    privateVariable = value;
  };

  return {
    getPrivateVariable: () => privateVariable,
    invokePrivateFunction: (value) => {
      privateFunction(value);
    }
  };
})();

//tests

if (!customModule.hasOwnProperty('getPrivateVariable')) {
  throw Error('getPrivateVariable should be public');
}

if (!customModule.hasOwnProperty('invokePrivateFunction')) {
  throw Error('invokePrivateFunction should be public');
}

if (customModule.hasOwnProperty('privateVariable')) {
  throw Error('privateVariable should be private');
}

if (customModule.hasOwnProperty('privateFunction')) {
  throw Error('privateFunction should be private');
}
