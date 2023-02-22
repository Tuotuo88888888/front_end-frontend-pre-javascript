(function () {
  // 完成横幅区的图片切换
  // 横幅区数据
  var datas = [
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/15c05b32cf948b594477dfc3eb69fb69.jpg?w=2452&h=920",
      link: "https://www.mi.com/mi11le-5g-ne",
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a532e33470d046b3f044d5ea49fc5e9e.png?thumb=1&w=2452&h=920&f=webp&q=90",
      link: "https://www.mi.com/xiaomipad5",
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918820682e4a490221cfd92b24c14b86.jpg?thumb=1&w=2452&h=920&f=webp&q=90",
      link: "https://www.mi.com/a/h/22033.html?sign=b60a6ca9167bce2d1ed8ee319cf83c75",
    },
    {
      img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/af7be8f65065f405f57f46a02731f78d.jpg?thumb=1&w=2452&h=920&f=webp&q=90",
      link: "https://www.mi.com/a/h/22812.html?sign=aab397a7ecf2ae4c1765e9d11fdccca6",
    },
  ];
  function $(searchDom) {
    return document.querySelector(searchDom);
  }

  //dom获取
  let bannerDom = $(".banner");
  let bannerLeft = bannerDom.querySelector(".banner-pointer-left");
  let bannerRight = bannerDom.querySelector(".banner-pointer-right");
  let bannerDots = bannerDom.querySelector(".banner-dots");
  let bannerCover = bannerDom.querySelector(".banner-cover");
  let img = bannerCover.querySelector("img");

  // 初始化
  function init() {
    Array.prototype.slice.call(bannerDots.children).forEach((item, index) => {
      item.remove();
    });
    for (var i = 0; i < datas.length; i++) {
      let span = document.createElement("span");
      span.className = "fl";
      bannerDots.appendChild(span);
    }
    changeIndex(0);
  }

  init();

  let index = 0;

  function changeIndex(index) {
    let item = datas[index];

    bannerCover.href = item.link;
    img.src = item.img;

    let selectedSpan = bannerDots.querySelector(".banner-dots-selected");
    if (selectedSpan) {
      selectedSpan.className = "fl";
    }
    bannerDots.children[index].className = "fl banner-dots-selected";

    // let spans = Array.prototype.slice.call(bannerDots.children);
    // for (var i = 0; i < spans.length; i++) {
    //   if (i == index) {
    //     spans[i].className = "fl banner-dots-selected";
    //   } else {
    //     spans[i].className = "fl";
    //   }
    // }
  }

  function turnLeft() {
    index--;
    if (index < 0) {
      index = datas.length - 1;
    }
    changeIndex(index);
  }
  function turnRight() {
    index++;
    if (index > datas.length - 1) {
      index = 0;
    }
    changeIndex(index);
  }
  bannerLeft.addEventListener("click", turnLeft);
  bannerRight.addEventListener("click", turnRight);

  bannerDots.addEventListener("click", function (e) {
    // console.log(e.target);
    if (e.target.tagName == "SPAN") {
      let spans = Array.prototype.slice.call(bannerDots.children);
      let index = spans.indexOf(e.target);
      changeIndex(index);
    }
  });
  let tempId = null;
  function start() {
    if (tempId) {
      return;
    }
    tempId = setInterval(turnRight, 1000);
  }
  function stop() {
    clearInterval(tempId);
    tempId = null;
  }
  start();
  bannerDom.addEventListener("mouseleave", start);
  bannerDom.addEventListener("mouseenter", stop);
})();
