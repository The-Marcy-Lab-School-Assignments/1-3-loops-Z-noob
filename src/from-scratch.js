/** FEEDBACK: Overall, great job getting all test cases to pass! You are killing it!!!! Just make sure to remove any commented out code before submitting! */
const loop0UpTo10 = () => {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  };
};
// loop0UpTo10()
const loop5to10 = () => {
  for (let i = 5; i <= 10; i++) {
    console.log(i);
  };
};

// you do NOT need an if check
const loopEvenNumbersUpTo10 = () => {
  for (let i = 0; i < 10; i += 2) {
    console.log(i);
  };
};

const countdown5to0 = () => {
  for (let i = 5; i >= 0; i--) {
    console.log(i);
  };
};

const loopUpToNum = (num) => {
  for (let i = 0; i < num; i++) {
    console.log(i);
  };
};
// loopUpToNum(0)
// loopUpToNum(-1)

const fizzbuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  };
};

module.exports = {
  loop0UpTo10,
  loop5to10,
  loopEvenNumbersUpTo10,
  countdown5to0,
  loopUpToNum,
  fizzbuzz,
};
