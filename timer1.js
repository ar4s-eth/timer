let arg = process.argv.slice(2);
// console.log(arg)

ms = 0

for (const time of arg) {
  if (!Number(time) || time < 0) {
    process.stdout.write(`please enter a number above 0`)
  } else if (time && time > 0)
  setTimeout(() => {
    process.stdout.write(`\x07`);
  }, (time * 1000) + ms);
  ms++
}

setTimeout(() => {
  process.stdout.write(`\n`)}, 200 * ms);


//edge cases 
  //no numbers are provided
  //an input as a negative number
  //an input is not a number 
