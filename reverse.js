var input = process.argv[2];

if (input)
  console.log(reverse(input));

function reverse(original) {
  //typo
  return original.split('').reverse().join('');
  //method is reverse
}
