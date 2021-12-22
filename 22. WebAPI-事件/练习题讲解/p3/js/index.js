// 输入待办事项，按下回车后，添加事项到列表
var txt = document.querySelector('.txt');
var ul = document.querySelector('.todo-list');

function createLi(content) {
  var li = document.createElement('li');
  var span = document.createElement('span');
  var button = document.createElement('button');
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = content;
  button.innerText = '删除';
  ul.appendChild(li);

  // 监听按钮的点击事件
  button.addEventListener('click', function () {
    li.remove();
  });
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
