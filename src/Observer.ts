import { Subject, Observer, Display } from "./IObserver";

class CatData implements Subject {
  private observers: Array<Observer>;
  private age: number;
  private color: string;
  private name: string;

  constructor() {
    this.observers = new Array();
  }

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    this.observers = this.observers.filter((observer) => observer !== o);
  }

  notifyObservers(): void {
    this.observers.forEach((observer) =>
      observer.update(this.age, this.color, this.name)
    );
  }

  dataChanged(): void {
    this.notifyObservers();
  }

  setData(age: number, color: string, name: string): void {
    this.age = age;
    this.color = color;
    this.name = name;
    this.dataChanged();
  }
}

class ExampleCatConsoleDisplay implements Observer, Display {
  private name: string;
  private age: number;

  constructor(catData: Subject) {
    catData.registerObserver(this);
  }

  update(age: number, _color: string, name: string): void {
    this.age = age;
    this.name = name;
    this.display();
  }

  display(): void {
    console.log(`Current cat: name: ${this.name} and age: ${this.age}`);
  }
}

class ColorDisplay implements Observer, Display {
  private color: string;

  constructor(catData: Subject) {
    catData.registerObserver(this);
  }

  update(_age: number, color: string, _name: string): void {
    this.color = color;
    this.display();
  }

  display(): void {
    console.log(`Color is ${this.color}`);
  }
}

const main = () => {
  const catData = new CatData();

  new ExampleCatConsoleDisplay(catData);

  catData.setData(3, "ginger", "Kacper");
  catData.setData(5, "black", "Melchior");

  new ColorDisplay(catData);

  setTimeout(() => catData.setData(5, "brown", "Baltazar"), 2000);
};

main();
