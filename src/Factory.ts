enum Burgers {
  BaconBurger = "bacon",
  SpecialCheeseBurger = "cheese",
  PeanutButterBurger = "butter",
}

abstract class BurgerStore {
  burger: Burger;

  orderBurger(type: Burgers): Burger {
    this.burger = this.createBurger(type);

    this.burger.prepare();

    return this.burger;
  }

  abstract createBurger(type: string): Burger;
}

class GenericBurgerStore extends BurgerStore {
  createBurger(type: Burgers): Burger {
    switch (type) {
      case "bacon":
        return new BaconBurger();
      case "cheese":
        return new SpecialCheeseBurger();
      default:
        return undefined;
    }
  }
}

class HipsterBurgerStore extends BurgerStore {
  createBurger(type: Burgers): Burger {
    switch (type) {
      case "cheese":
        return new SpecialCheeseBurger();
      case "butter":
        return new PeanutButterBurger();
      default:
        return undefined;
    }
  }
}

abstract class Burger {
  protected name: string;
  protected toppings: Array<any> = [];

  prepare(): void {
    console.log("Preparing a burger...");
  }

  getName(): string {
    return this.name;
  }
}

class BaconBurger extends Burger {
  constructor() {
    super();
    this.name = "Bacon Burger";
    this.toppings.push("Bacon");
  }
}

class SpecialCheeseBurger extends Burger {
  constructor() {
    super();
    this.name = "Bacon Burger";
    this.toppings.push("Bacon");
  }

  prepare(): void {
    console.log("Preparing SPECIAL Burger!");
  }
}

class PeanutButterBurger extends Burger {
  constructor() {
    super();
    this.name = "Peanut Butter Burger";
    this.toppings.push("Peanut Butter");
  }
}

const main = () => {
  const genericBurgerStore: BurgerStore = new GenericBurgerStore();
  const hipsterBurgerStore: BurgerStore = new HipsterBurgerStore();

  const baconBurger = genericBurgerStore.orderBurger(Burgers.BaconBurger);
  console.log(`Ordered a ${baconBurger.getName()}`);

  const peanutBurger = hipsterBurgerStore.orderBurger(
    Burgers.PeanutButterBurger
  );
  console.log(`Ordered a ${peanutBurger.getName()}`);
};

main();
