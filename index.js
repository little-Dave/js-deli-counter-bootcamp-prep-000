function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  katzDeliLine.length === 0
    return katzDeliLine.length === 0 
    ? "There is nobody waiting to be served!" 
    : `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine) {
  var arrToReturn = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (let i = 0; i < katzDeliLine.length; i++) {
      if (i === 0) {
        arrToReturn.push(`1. ${katzDeliLine[i]}`)
      } else {
      arrToReturn.push(` ${i + 1}. ${katzDeliLine[i]}`)
      }
    }
    return `The line is currently: ${arrToReturn}`;
  }
}