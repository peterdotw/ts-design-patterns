class Singleton {
  private static instance: Singleton;

  private constructor() {}

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}

const main = () => {
  const singleton1 = Singleton.getInstance();
  const singleton2 = Singleton.getInstance();

  console.log(singleton1 === singleton2);

  class NotSingleton {}

  const notsingleton1 = new NotSingleton();
  const notsingleton2 = new NotSingleton();

  console.log(notsingleton1 === notsingleton2);
};

main();
