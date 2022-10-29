export class SingletonController {
  public testValues: string[] = [];

  public static instance: SingletonController; // it's public just for tests

  private constructor() {}

  public static getInstance() {
    if (!this.instance) {
      this.instance = new SingletonController();
    }
    return this.instance;
  }
}

console.log(SingletonController.instance);
const instance = SingletonController.getInstance();
instance.testValues.push("test1");
instance.testValues.push("test2");
const instance2 = SingletonController.getInstance();
console.log(instance2.testValues);
instance2.testValues.push("test3");
console.log(instance.testValues);
