// 根据hero.js提供的数据heros，创建合适的元素，将英雄数据显示到页面上
function createHero(options) {
  let a = document.createElement("a");
  a.href = `https://pvp.qq.com/web201605/herodetail/${options.ename}.shtml`;
  a.target = "_blank";
  a.className = "item";
  let img = document.createElement("img");
  img.src = `https://game.gtimg.cn/images/yxzj/img201606/heroimg/${options.ename}/${options.ename}.jpg`;
  let span = document.createElement("span");
  span.innerText = options.title;
  a.appendChild(img);
  a.appendChild(span);

  return a;
}
let container = document.querySelector(".container");
let containerContext = document.createDocumentFragment();
for (let i = 0; i < heros.length; i++) {
  containerContext.appendChild(createHero(heros[i]));
}
Array.prototype.slice.call(container.children).forEach(function (item) {
  item.remove();
});
container.appendChild(containerContext);
