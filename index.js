// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
  return Math.abs(42 - blockNumber);
}

function distanceFromHqInFeet(blockNumber) {
  numberOfBlocks = distanceFromHqInBlocks(blockNumber);
  return numberOfBlocks * 264;
}

function distanceTravelledInFeet(start, end) {
  numberOfBlocks = Math.abs(end - start);
  return numberOfBlocks* 264;
}

function calculatesFarePrice() {}