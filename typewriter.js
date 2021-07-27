const sentence = "hello there from lighthouse labs";

const write = () => {
  let index = 0;
  for (let char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, 50 * index);
    index++;
  }
};

write();
setTimeout(() => {
  console.log();
}, 51 * sentence.length);
