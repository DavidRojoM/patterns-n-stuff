type ProcessFn<T> = (value: T) => T;

type ProcessCreatorFn<T> = {
  pipe: (...fns: (() => ProcessFn<T>)[]) => T;
};

function processs<T>(value: T): ProcessCreatorFn<T> {
  return {
    pipe: function (...fns: (() => ProcessFn<T>)[]): T {
      for (const fn of fns) {
        value = fn()(value);
      }
      return value;
    },
  };
}

function mulBy2(): ProcessFn<number> {
  return (value) => value * 2;
}

function add3(): ProcessFn<number> {
  return (value) => value + 3;
}

function log(): ProcessFn<number> {
  return (value) => {
    console.log(value);
    return value;
  };
}

const processedVal = processs(1).pipe(mulBy2, add3, log); // 5

console.log("aaa", processedVal);
