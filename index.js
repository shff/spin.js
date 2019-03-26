const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

let id = null;
let text = "";

exports.spin = (_text = null, speed = 80) => {
  text = _text;
  let index = 0;

  if (id) return;

  id = setInterval(() => {
    process.stderr.write("\u001b[?25l");
    index = ++index % frames.length;
    process.stderr.clearLine();
    process.stderr.cursorTo(0);
    if (text) {
      process.stderr.write(`\u001B[36m${frames[index]}\u001B[39m ${text}`);
    }
    else {
      id = clearInterval(id);
      process.stderr.write("\u001b[?25h");
    }
  }, speed);
};
