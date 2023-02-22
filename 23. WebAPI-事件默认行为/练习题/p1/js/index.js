// 完成表单验证

function validateAccount() {
  let accountContainer = document.querySelector("#account");
  let account = accountContainer.querySelector("input");
  let msg = "";
  let txtAccount = account.value.trim();
  if (!txtAccount) {
    msg = "请输入账号";
  } else if (txtAccount.length < 3) {
    msg = "账号必须小于3位";
  }
  accountContainer.querySelector("P").innerText = msg;
  accountContainer.className = msg ? "form-item err" : "form-item";
  return !msg;
}

function validatePassword() {
  let passwordContainer = document.querySelector("#password");
  let password = passwordContainer.querySelector("input");
  let msg = "";
  let txtPassword = password.value.trim();
  if (!txtPassword) {
    msg = "请输入密码";
  } else if (txtPassword.length < 6 || txtPassword.length > 12) {
    msg = "密码是6-12位";
  }
  passwordContainer.querySelector("P").innerText = msg;
  passwordContainer.className = msg ? "form-item err" : "form-item";
  return !msg;
}

function validateForm() {
  let validateAccountResult = validateAccount();
  let validatePasswordResult = validatePassword();
  return validateAccountResult && validatePasswordResult;
}

document
  .querySelector("#account input")
  .addEventListener("input", validateAccount);
document
  .querySelector("#password input")
  .addEventListener("input", validatePassword);
document
  .querySelector(".form-container")
  .addEventListener("submit", function (e) {
    if (!validateForm()) {
      e.preventDefault();
    }
  });
