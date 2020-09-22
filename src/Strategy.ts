import { WeaponBehavior } from "./IStrategy";

abstract class Enemy {
  protected weapon: WeaponBehavior;

  fight(): void {
    this.weapon.useWeapon();
  }

  setWeapon(w: WeaponBehavior): void {
    this.weapon = w;
  }
}

class Lion extends Enemy {
  protected weapon = new ClawBehavior();
}

class Knight extends Enemy {
  protected weapon = new SwordBehavior();
}

class ClawBehavior implements WeaponBehavior {
  useWeapon() {
    console.log("Scratch with claws!");
  }
}

class SwordBehavior implements WeaponBehavior {
  useWeapon() {
    console.log("Slash with sword!");
  }
}

class AxeBehavior implements WeaponBehavior {
  useWeapon() {
    console.log("Swung with axe!");
  }
}

const main = () => {
  const randomLion = new Lion();
  randomLion.fight();

  const randomKnight = new Knight();
  randomKnight.fight();
  randomKnight.setWeapon(new AxeBehavior());
  randomKnight.fight();
};

main();
