export interface BeerIngredientFactory {
  createHops(): Hops;
  createGrains(): Grains;
}

export interface Hops {
  getHopsDescription(): string;
}

export interface Grains {
  getGrainsDescription(): string;
  combine(hops: Hops): string;
}
