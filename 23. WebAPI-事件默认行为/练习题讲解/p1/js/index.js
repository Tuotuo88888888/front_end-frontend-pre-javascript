// 完成表单验证

/**
 * 验证账号
 */
function validateLoginId() {
  var div = document.querySelector('#loginId');
  var inp = div.querySelector('input');
  var msg = div.querySelector('.msg');

  var err = ''; // 错误消息
  var loginId = inp.value.trim();
  if (!loginId) {
    err = '账号不能为空';
  } else if (loginId.length < 3 || loginId.length > 12) {
    err = '账号是3-12位的';
  }
  msg.innerText = err; // 设置错误消息到p元素中
  // 判断是否有错误
  div.className = err ? 'form-item err' : 'form-item';

  return !err;
}

/**
 * 验证密码
 */
function validatePassword() {
  var div = document.querySelector('#loginPwd');
  var inp = div.querySelector('input');
  var msg = div.querySelector('.msg');

  var err = ''; // 错误消息
  var loginPwd = inp.value.trim();
  if (!loginPwd) {
    err = '密码不能为空';
  } else if (loginPwd.length < 6 || loginPwd.length > 16) {
    err = '密码是6-16位的';
  }
  msg.innerText = err; // 设置错误消息到p元素中
  // 判断是否有错误
  div.className = err ? 'form-item err' : 'form-item';

  return !err;
}

/**
 * 验证整个表单，设置元素内容和状态
 * @return {boolean} 验证通过返回true，不通过返回false
 */
function validateForm() {
  var r1 = validateLoginId();
  var r2 = validatePassword();
  return r1 && r2;
}

// 注册事件

var loginId = document.querySelector('#loginId input');
var loginPwd = document.querySelector('#loginPwd input');

loginId.addEventListener('input', validateLoginId);
loginPwd.addEventListener('input', validatePassword);

var form = document.querySelector('.form-container');

form.addEventListener('submit', function (e) {
  var result = validateForm();
  if (!result) {
    // 验证未通过，阻止提交
    e.preventDefault();
  }
});
