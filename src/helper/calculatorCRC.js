export const xOrOperation = (bin1, bin2) => {
  let arrayBin1 = bin1.split("");
  let arrayBin2 = bin2.split("");
  let trace = String(bin1) + "\n";
  let result = "";
  let indentation = "";
  let r = arrayBin2.length - 1;

  while (arrayBin2.length <= arrayBin1.length && arrayBin1) {
    if (arrayBin1[0] == 1) {
      arrayBin1.shift();

      for (let i = 0; i < r; i += 1) {
        arrayBin1[i] ^= arrayBin2[i + 1];
      }

      if (arrayBin1.length > 0) {
        trace += `${indentation}${arrayBin2.join("")}\n`;
        trace += `${indentation}${"-".repeat(arrayBin2.length)}\n`;
        indentation += " ";
        trace += `${indentation}${arrayBin1.join("")}\n`;
        result += "1";
      }
    } else {
      arrayBin1.shift();
      trace += `${indentation}${"0".repeat(arrayBin2.length)}\n`;
      trace += `${indentation}${"-".repeat(arrayBin2.length)}\n`;
      indentation += " ";
      trace += `${indentation}${arrayBin1.join("")}\n`;
      result += "0";
    }
  }
  const R = arrayBin1.join("");
  return {
    R,
    result,
    trace,
  };
};

export const calcCRC = (data, G) => {
  const DR = data + "".padStart(G.length - 1, "0");
  const { R, result, trace } = xOrOperation(DR, G);
  const CRC = R;
  const TX = data + CRC;
  return {
    D: data,
    TX,
    result,
    trace,
    CRC,
  };
};

export const getPolynomial = (binaryNumber) => {
  let polynomial = "";
  let bitAmount = binaryNumber.length;

  for (let i = 0, _pj_a = bitAmount - 2; i < _pj_a; i += 1) {
    if (binaryNumber[i] == "1") {
      if (polynomial.length == 0) {
        polynomial += "x^" + (bitAmount - i - 1);
      } else {
        polynomial += "+x^" + (bitAmount - i - 1);
      }
    }
  }

  if (binaryNumber[bitAmount - 2] == "1") {
    if (polynomial.length == 0) {
      polynomial += "x";
    } else {
      polynomial += "+x";
    }
  }

  if (binaryNumber[bitAmount - 1] == "1") {
    polynomial += "+1";
  }

  return polynomial
};

export const getPolynomialArray = (binaryNumber) => {
    let polynomial = [];
    const bitAmount = binaryNumber.length;
    const degree = bitAmount - 1;
  
    for (let i = 0; i < degree - 1; i += 1) {
      if (binaryNumber[i] == "1") {
        if (polynomial.length == 0) {
          polynomial.push(bitAmount - i - 1);
        } else {
          polynomial.push(bitAmount - i - 1);
        }
      }
    }
  
    if (binaryNumber[degree - 1] == "1") {
      polynomial.push(1);
    }
  
    if (binaryNumber[degree] == "1") {
      polynomial.push(0);
    }
    return polynomial;
  };
// How to use
// By Carlos Castro & Santiago Padilla

// let data = "1011001100101";
// let G = "10001";

// let data = "1000000001";
// let G = "1111";
// getPolynomial(data);
// getPolynomialArray(data);
// getPolynomial(G);
// getPolynomialArray(G);
// const { trace, D, TX, result, CRC } = calcCRC(data, G);
// console.log(trace);
// console.log("🚀 ~ file: t.js ~ line 88 ~ CRC   ", CRC);
// console.log("🚀 ~ file: t.js ~ line 88 ~ result", result);
// console.log("🚀 ~ file: t.js ~ line 88 ~ D     ", D);
// console.log("🚀 ~ file: t.js ~ line 88 ~ TX    ", TX);

// const {R, trace: trace2 } = xOrOperation(TX,G);
// console.log("🚀 ~ file: calculatorCRC.js ~ line 127 ~ R", R);
// console.log("🚀 ~ file: calculatorCRC.js ~ line 127 ~ trace2", trace2);

