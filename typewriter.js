const sentence = "hello there from lighthouse labs";
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char + "\n");// print the char here
  }, delay);
  delay += 50;

}

