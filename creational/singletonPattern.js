//Singleton pattern

//example
const singleton = (() => {
  let instance;

  const init = () => {
    privateMember = Math.random();

    return {
      getPrivateMember: () => privateMember
    };
  };

  return {
    getInstance: () => {
      if (!instance) {
        instance = init();
      }

      return instance;
    }
  };
})();

//tests
if (singleton.getInstance().getPrivateMember() !== singleton.getInstance().getPrivateMember()) {
  throw Error('Should only create one instance');
}
