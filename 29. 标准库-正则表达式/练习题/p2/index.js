let contentDom = document.querySelector(".content");
let contentStr = contentDom.innerHTML;
let reg = new RegExp(/\s+.+/g);
contentDom.innerHTML = contentStr.replace(reg, function (str) {
  str = str.replace(/\s/g, "");
  str = "<p>" + str + "</p>";
  return str;
});
console.log(contentStr);
