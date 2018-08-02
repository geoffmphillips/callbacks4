var words = ["ground", "control", "to", "major", "tom"];

function map(array, fn) {
  output = [];
  array.forEach(function(word) {
    output.push(fn(word));
  });
  console.log(output);
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
