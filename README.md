# spin.js
Single-function alternative to ora.js

## Usage

```js
const { spin } = require("./spin");

(async function() {
  const time = ms => new Promise(r => setTimeout(r, ms));

  spin("Loading unicorns", 50);
  await time(1000);
  spin("Loading rainbows");
  await time(1000);
  spin("Loading with indent");
  await time(1000);
  spin("Loading with different spinners");
  await time(1000);
  spin();
  await time(1000);
  spin("Start again!");
  await time(1000);
  spin();
})();
```
