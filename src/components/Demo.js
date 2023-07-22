// useMemo Explanation

import React, { useMemo, useState } from "react";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setisDarkTheme] = useState(false);

  // heavy operation
  const findPrime = (num) => {
    let i,
      primes = [2, 3],
      n = 5;
    const isPrime = (n) => {
      let i = 1,
        p = primes[i],
        limit = Math.ceil(Math.sqrt(n));
      while (p <= limit) {
        if (n % p === 0) {
          return false;
        }
        i += 1;
        p = primes[i];
      }
      return true;
    };
    for (i = 2; i <= num; i += 1) {
      while (!isPrime(n)) {
        n += 2;
      }
      primes.push(n);
      n += 2;
    }
    return primes[num - 1];
  };

  // ?    // this cause the page frozed for large number because of re-rendering
  //     const prime = () => findPrime(text);

  // ? // if we have calculated nth prime for a particular no. and if we toggle the theme it causes the prime calculation again even if it was calculated  before - these can be handled by memoisation(useMemo)
  const prime = useMemo(()=>findPrime(text),[text]);
//   ? now this prime will be having memoised value of primeNumber which cause it to recalculte only if text Changes and it won't affect toogle rate

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="bg-red-400 m-2 p-2"
          onClick={() => setisDarkTheme(!isDarkTheme)}
        >
          Change theme
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        {/* <h1>nth Prime : {prime()}</h1> */}
        <h1>nth Prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
