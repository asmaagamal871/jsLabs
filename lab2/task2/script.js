const vowels = ["a", "e", "o", "u", "i"];
count = 0;
str = prompt("enter string");
for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
        count++;
    }
}
  document.write("number of vowels= " + count);


