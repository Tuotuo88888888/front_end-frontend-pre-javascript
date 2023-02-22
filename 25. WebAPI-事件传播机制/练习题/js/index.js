// 输入待办事项，按下回车后，添加事项到列表
// 使用事件委托的方式完成删除事件
let todoList = document.querySelector(".todo-list");
Array.prototype.slice.call(todoList.children).forEach(function (child) {
  child.remove();
});
// 输入待办事项，按下回车后，添加事项到列表
function createTodo(content) {
  todoList.innerHTML += `<li><span>${content}</span><button>删除</button></li>`;
}
// 点击删除后，删除对应的待办事项
document.querySelector(".txt").addEventListener("keydown", function (e) {
  if (e.key !== "Enter" || this.value.trim() === "") {
    return;
  }
  createTodo(this.value.trim());
  this.value = "";
});
todoList.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
});
