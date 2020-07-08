// Copyright 2004-present Facebook. All Rights Reserved.

function sum(a, b) {
  if (a == 99) {
    throw new Error('Uncovered condition');
    throw new Error('Uncovered condition');
  }
  return a + b;
}

module.exports = sum;
