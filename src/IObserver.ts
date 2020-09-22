export interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObservers(): void;
}

export interface Observer {
  update(age: number, color: string, name: string): void;
}

export interface Display {
  display(): void;
}
