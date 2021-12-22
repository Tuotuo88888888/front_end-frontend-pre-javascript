// 根据hero.js提供的数据heros，创建合适的元素，将英雄数据显示到页面上

/* 
<a
  href="https://pvp.qq.com/web201605/herodetail/528.shtml"
  target="_blank"
  class="item"
>
  <img
    src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/528/528.jpg"
    alt=""
  />
  <span>澜</span>
</a>
*/

/**
 * 为英雄对象创建元素
 * @param {*} h
 */
function createHero(h) {
  var a = document.createElement('a');
  var container = document.querySelector('.container');
  a.href = 'https://pvp.qq.com/web201605/herodetail/' + h.ename + '.shtml';
  a.target = '_blank';
  a.className = 'item';

  // 创建图片
  var img = document.createElement('img');
  img.src =
    'https://game.gtimg.cn/images/yxzj/img201606/heroimg/' +
    h.ename +
    '/' +
    h.ename +
    '.jpg';

  // 创建span
  var span = document.createElement('span');
  span.innerHTML = h.cname;

  a.appendChild(img);
  a.appendChild(span);

  container.appendChild(a);
}

for (var i = 0; i < heros.length; i++) {
  createHero(heros[i]);
}
