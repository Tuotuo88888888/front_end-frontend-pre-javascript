// 输入待办事项，按下回车后，添加事项到列表
// 使用事件委托的方式完成删除事件
var txt = document.querySelector('.txt');
var ul = document.querySelector('.todo-list');

function createLi(content) {
  ul.innerHTML += '<li><span>' + content + '</span><button>删除</button></li>';
}

txt.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (!this.value.trim()) {
      return;
    }
    // 生成一个li  span、button删除
    createLi(this.value.trim());

    // 文本框清空
    this.value = '';
  }
});

// 点击删除后，删除对应的待办事项
ul.addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
  }
});
