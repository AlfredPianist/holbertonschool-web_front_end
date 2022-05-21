function countPrimeNumbers() {
  let primes = 1;
  let count = 0;
  for (let num = 2; num <= 100; num++) {
    for (count = 2; count * count <= num; count++) {
      if (num % count === 0) {
        break;
      }
    }
    if (num % count !== 0) {
      primes++;
    }
  }
  return primes;
}

const begin = performance.now();
countPrimeNumbers();
const end = performance.now();
console.log(
  `Execution time of printing countPrimeNumbers was ${
    end - begin
  } milliseconds.`
);
