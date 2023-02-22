let todoList = document.querySelector(".todo-list");
Array.prototype.slice.call(todoList.children).forEach(function (child) {
  child.remove();
});
// 输入待办事项，按下回车后，添加事项到列表
function createTodo(content) {
  let li = document.createElement("li");
  let span = document.createElement("span");
  let button = document.createElement("button");
  span.innerText = content;
  button.innerHTML = "删除";
  button.addEventListener("click", Element.prototype.remove.bind(li));
  li.appendChild(span);
  li.appendChild(button);
  return li;
}
// 点击删除后，删除对应的待办事项
document.querySelector(".txt").addEventListener("keydown", function (e) {
  if (e.key !== "Enter" || this.value.trim() === "") {
    return;
  }
  todoList.appendChild(createTodo(this.value.trim()));
  this.value = "";
});
