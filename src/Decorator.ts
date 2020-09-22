abstract class Burger {
  description: string = "Unknown Burger";

  getDescription(): string {
    return this.description;
  }

  abstract cost(): number;
}

class SingleBurger extends Burger {
  constructor() {
    super();
    this.description = "Single Burger";
  }

  cost(): number {
    return 20;
  }
}

class ChickenBurger extends Burger {
  constructor() {
    super();
    this.description = "Chicken Burger";
  }

  cost(): number {
    return 18;
  }
}

abstract class CondimentDecorator extends Burger {
  abstract getDescription(): string;
}

class Bacon extends CondimentDecorator {
  burger: Burger;

  constructor(burger: Burger) {
    super();
    this.burger = burger;
  }

  getDescription(): string {
    return this.burger.getDescription() + " with Bacon";
  }

  cost(): number {
    return this.burger.cost() + 2;
  }
}

class Cheese extends CondimentDecorator {
  burger: Burger;

  constructor(burger: Burger) {
    super();
    this.burger = burger;
  }

  getDescription(): string {
    return this.burger.getDescription() + " with Cheese";
  }

  cost(): number {
    return this.burger.cost() + 2;
  }
}

class OnionRings extends CondimentDecorator {
  burger: Burger;

  constructor(burger: Burger) {
    super();
    this.burger = burger;
  }

  getDescription(): string {
    return this.burger.getDescription() + " with Onion Rings";
  }

  cost(): number {
    return this.burger.cost() + 4;
  }
}

const main = () => {
  let burger: Burger = new SingleBurger();
  console.log(`${burger.getDescription()} ${burger.cost()}zł`);

  let burger2: Burger = new ChickenBurger();
  burger2 = new Bacon(burger2);
  burger2 = new OnionRings(burger2);
  console.log(`${burger2.getDescription()} ${burger2.cost()}zł`);
};

main();
