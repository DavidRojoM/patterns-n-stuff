abstract class AbstractStrategy<T> {
  abstract execute(): T;
}

class AddStrategy implements AbstractStrategy<number> {
  constructor(protected readonly args: number[]) {}
  execute(): number {
    return this.args.reduce((acc, curr) => acc + curr, 0);
  }
}

class SubtractStrategy implements AbstractStrategy<number> {
  constructor(private readonly args: number[]) {}
  execute(): number {
    return this.args.reduce((acc, curr) => acc - curr, 0);
  }
}

class StrategyController {
  static handle(strategy: AbstractStrategy<number>): number {
    return strategy.execute();
  }
}

console.log(StrategyController.handle(new AddStrategy([2, 2, 2, 2, 2]))); // 10
console.log(StrategyController.handle(new SubtractStrategy([2, 2, 2, 2, 2]))); // -10
