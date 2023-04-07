// Brute force
function isPrimeVeryUnefficient(num) {
  if (num === 1) return false;
  let factorCount = 0;

  for (let j = 1; j <= num; j++) {
    if (num % j == 0) {
      factorCount = factorCount + 1;
    }
  }
  return factorCount > 2 ? false : true;
}

// https://projecteuler.net/overview=0007
function isPrimeSieveOfEratosthenes(num) {
  if (num === 1) return false;
  else if (num < 4) return true;
  else if (num % 2 === 0) return false;
  else if (num % 3 === 0) return false;
  else if (num < 9) return true;
  else {
    const r = Math.floor(Math.sqrt(num));
    let f = 5;
    while (f <= r) {
      if (num % f == 0) return false;
      if (num % (f + 2) == 0) return false;
      f = f + 6;
    }
  }
  return true;
}

(() => {
  const startDate = new Date();
  console.log(startDate);
  const start = 2;
  const limit = 100000;
  let primeCount = 0;
  let currentPrime = 0;
  let currentNumber = start;
  while (primeCount < limit) {
    if (isPrimeSieveOfEratosthenes(currentNumber)) {
      currentPrime = currentNumber;
      primeCount = primeCount + 1;
      console.log("Prime: ", currentNumber, "Index: ", primeCount, "");
    }
    currentNumber = currentNumber + 1;
  }
  console.log(startDate, "\n", new Date(), "\n", startDate - new Date());
})();

// Prime:  179424673 Index:  10000000 
// Prime: 4534455768901
