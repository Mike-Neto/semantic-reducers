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

function min(prev, next) {
  return Math.min(prev, next);
}

function max(prev, next) {
  return Math.max(prev, next);
}

module.exports = { sum, unique, min, max };
