// Timer function that takes in any number of alarms and outputs a beep once time has elapsed

process.argv.forEach(function timer (numbers){
  if (numbers < 0) {
    return
  };
  let numberToNumber = Number.parseFloat(numbers);
  if (Number.isNaN(numberToNumber)) {
    return;
  }
  let numberDelay = 0;
  let charDelay = numbers*1000;
  setTimeout(() => {process.stdout.write('\x07')}, charDelay);
});



// Beep sound:
// process.stdout.write('\x07');

// Edge cases
// No numbers provided - should not beep
// An input is a negative number - ignore or skip such numbers
// An input is not a number - ignore or skip such inputs
