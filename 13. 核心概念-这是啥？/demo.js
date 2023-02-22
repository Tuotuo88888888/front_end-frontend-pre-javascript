var stringArray = new Array(100).fill("a").map(function (v) {
  return Math.random().toString(32).slice(-8);
});
const sym = Symbol("build");
Object.defineProperty(String.prototype, sym, {
  get: function () {
    return this.toString();
  },
});

console.time("1");
for (const item of stringArray) {
  var bb = item[sym];
  console.log(bb);
}
console.timeEnd("1");
