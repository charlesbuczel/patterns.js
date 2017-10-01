//Observer

//example

const _checkIndexValid = Symbol('_checkIndexValid');

class ObserverList {
  constructor({observerList = []} = {}) {
    this.observerList = observerList;
  }

  add(obj) {
    return this.insert(obj, this.observerList.length);
  }

  insert(obj, index) {
    if (this[_checkIndexValid]) {
      this.observerList.splice(index, 0, obj);
    }

    return index;
  }

  empty() {
    this.observerList = [];
  }

  count = () => this.observerList.length;

  get(index) {
    if (this[_checkIndexValid]) {
      return this.observerList[index];
    }
  }

  [_checkIndexValid] = (index) => index >= 0 && index < this.observerList.length;
}

class Subject {
  constructor({observers = new ObserverList()} = {}) {
    this.observers = observers;
  }

  addObserver(observer) {
    this.observers.add(observer);
  }

  removeObserver(observer) {
    this.observers.removeAt(this.observers.indexOf(observer));
  }

  notify(context) {
    let observerCount = this.observers.count();

    for (let i = 0; i < observerCount; i++) {
      this.observers.get(i).update(context);
    }
  }
}

class Observer {
  constructor() {}

  update() {}
}
