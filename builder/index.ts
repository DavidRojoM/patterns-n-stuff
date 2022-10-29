class Burger {
  name?: string;
  patties?: number;
  cheese: boolean;
  bacon: boolean;
  secretSauce: boolean;
  veggies: string[] = [];
  constructor() {
    this.cheese = false;
    this.bacon = false;
    this.secretSauce = false;
  }
}

class BurgerBuilder {
  private burger: Burger = new Burger();

  addPatties(patties: number): BurgerBuilder {
    this.burger.patties = patties;
    return this;
  }
  hasCheese(): BurgerBuilder {
    this.burger.cheese = true;
    return this;
  }
  hasBacon(): BurgerBuilder {
    this.burger.bacon = true;
    return this;
  }
  hasSecretSauce(): BurgerBuilder {
    this.burger.secretSauce = true;
    return this;
  }
  addVeggies(veggies: string[]): BurgerBuilder {
    this.burger.veggies = [...this.burger.veggies, ...veggies];
    return this;
  }

  build(): Burger {
    return this.burger;
  }
}

const burger = new BurgerBuilder()
  .addPatties(3)
  .hasCheese()
  .hasBacon()
  .addVeggies(["lettuce", "tomato"])
  .build();

console.log(burger);
