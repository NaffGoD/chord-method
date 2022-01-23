// Limits
let value = 0;
let a = 0;
let b = 1;
let accuracy = 4;

// x**3 - 3*x**2+6*x - 2;  limits: 0, 1
// x**3 - 0.2*x**2 + 0.3*x - 1.2; limits: 1, 2
// x**3 - 3*x**2 + 12*x - 9; limits: 0, 2
// x**3 - 0.1*x**2 + 0.4 * x - 1.5; limits: 1,2
// x**3 - 3*x**2 + 6*x + 3; limits: -1, 0

const SubstitutionFunction = (x) => x**3 - 3*x**2+6*x - 2;

const ChordMethod = (a, b) => a - (((b - a) * SubstitutionFunction(a)) / (SubstitutionFunction(b) - SubstitutionFunction(a)));

while (true) {
    if ((SubstitutionFunction(a) * SubstitutionFunction(b) < 0)) {
          value = ChordMethod(a,b);
          if (SubstitutionFunction(a) * SubstitutionFunction(value) < 0) {
              if(value.toFixed(accuracy) == b.toFixed(accuracy))
                  break;
              b = value;
          } else {
              if(value.toFixed(accuracy) == a.toFixed(accuracy))
                  break;
              a = value;
            }
            console.log(value)
    }
}

alert('Result: ' + value);

