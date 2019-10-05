function accumulate(acc, value) {
  acc += value;
  return acc;
}

function sum(sum, value) {
  if (Number.isInteger(sum) && Number.isInteger(value)) {
    return accumulate(sum, value);
  } else if (Number.isInteger(sum) && !Number.isInteger(value)) {
    return sum;
  } else if (!Number.isInteger(sum) && Number.isInteger(value)) {
    return value;
  } else {
    return 0;
  }
}

function unique(uniques, value) {
  if (!Array.isArray(uniques)) {
    return [uniques, value];
  }

  if (!uniques.includes(value)) {
    uniques.push(value);
  }

  return uniques;
}

module.exports = { sum, unique };
