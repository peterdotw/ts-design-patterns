import { BeerIngredientFactory, Hops, Grains } from "./IAbstractFactory";

class ViennaLagerFactory implements BeerIngredientFactory {
  createHops(): Hops {
    return new Liberty();
  }

  createGrains(): Grains {
    return new Vienna();
  }
}

class WestCoastIPA implements BeerIngredientFactory {
  createHops(): Hops {
    return new Citra();
  }

  createGrains(): Grains {
    return new Pale();
  }
}

class Citra implements Hops {
  getHopsDescription(): string {
    return "Citra Hops";
  }
}

class Liberty implements Hops {
  getHopsDescription(): string {
    return "Liberty Hops";
  }
}

class Pale implements Grains {
  getGrainsDescription(): string {
    return "Pale Malt";
  }

  combine(hops: Hops): string {
    const result = hops.getHopsDescription();
    return `Pale doing something with ${result}`;
  }
}

class Vienna implements Grains {
  getGrainsDescription(): string {
    return "Vienna Malt";
  }

  combine(hops: Hops): string {
    const result = hops.getHopsDescription();
    return `Vienna doing something with ${result}`;
  }
}

const clientCode = (factory: BeerIngredientFactory) => {
  const malt = factory.createGrains();
  const hops = factory.createHops();

  console.log(malt.getGrainsDescription());
  console.log(malt.combine(hops));
};

clientCode(new ViennaLagerFactory());
clientCode(new WestCoastIPA());
