//Revealing module pattern

//example

const revealingModule = (() => {
  let counter = 0;

  let incrementCounter = () => {
    counter++;
  }

  let incrementCounterAndLog = () => {
    console.log('incrementing counter');
    incrementCounter();
  }

  let getCounterValue = () => counter;

  return {
    increment: incrementCounter,
    incrementDev: incrementCounterAndLog,
    getValue: getCounterValue
  }
})();

//tests

if (!revealingModule.hasOwnProperty('increment')) {
  throw Error('increment should be public');
}

if (!revealingModule.hasOwnProperty('incrementDev')) {
  throw Error('incrementDev should be public');
}

if (!revealingModule.hasOwnProperty('getValue')) {
  throw Error('getValue should be public');
}

if (revealingModule.hasOwnProperty('counter')) {
  throw Error('counter should be private');
}

if (revealingModule.hasOwnProperty('incrementCounter')) {
  throw Error('incrementCounter should be private');
}

if (revealingModule.hasOwnProperty('incrementCounterAndLog')) {
  throw Error('incrementCounterAndLog should be private');
}

if (revealingModule.hasOwnProperty('getCounterValue')) {
  throw Error('getCounterValue should be private');
}
