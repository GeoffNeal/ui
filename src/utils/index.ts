interface Callback<ArgType, Ret = void> {
  (...args: ArgType[]): Ret;
}
interface ArgCollector<ArgType> {
  (...args: ArgType[]): void;
}
interface Caller {
  <ArgType>(
    ...fns: (Callback<ArgType, void> | undefined)[]
  ): ArgCollector<ArgType>;
}

export const callAll: Caller = (...fns) => {
  return (...args) => fns.forEach((fn) => fn && fn(...args));
};
