/** FEEDBACK: Great job! */
const whileToFor = () => {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  };
};

const continueGuardClause = () => {
  for (let i = 1; i < 5; i++) {
    if ((i === 2) || (i === 3)) {
      // console.log("Sure glad this isn't 2 or 3");
      // console.log(i);
      continue;
    }
    console.log("Sure glad this isn't 2 or 3");
    console.log(i);
    // continue;
  }
};
// continueGuardClause()
/** FEEDBACK: Hey! I know this can be confusing, maybe we go over this during a lab review! */
//When I was reading the .spec.js it was confusing which input and output it wants

module.exports = {
  whileToFor,
  continueGuardClause,
};

// const bailOut = () => {
//   for (let i = 0; i < 5; i++) {
//     if (i > 3) return ;
//       console.log('Inside the loop', i);
//   }
//   console.log('Outside the loop');
// };
// bailOut()