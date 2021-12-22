function $(selector) {
  return document.querySelector(selector);
}

/**
 * 根据协议的多选框是否选中设置注册按钮状态
 */
function setSubmitButtonStatus() {
  $('button[type="submit"]').disabled = !$('.policy input').checked;
}

/**
 * 根据手机号文本框中的文本，设置发送验证码按钮的状态
 */
function setSendCodeButtonStatus() {
  var txt = $('#txtPhone');
  var btn = $('.captcha button');
  btn.disabled = txt.value.length !== 11;
}

/**
 * 根据当前选中的爱好，设置已选择爱好文本
 */
function setSelectedLoves() {
  var sel = $('select');
  var choose = $('#selChoose');
  var loves = [];
  for (var i = 0; i < sel.children.length; i++) {
    var option = sel.children[i];
    if (option.selected) {
      loves.push(option.innerText);
    }
  }
  var str = loves.join(',');
  choose.innerText = '已选择的爱好：' + str;
}

setSubmitButtonStatus();
setSendCodeButtonStatus();
setSelectedLoves();

// 将上面的函数和用户事件连接
$('#txtPhone').addEventListener('input', setSendCodeButtonStatus);

$('.policy input').addEventListener('change', setSubmitButtonStatus);

$('select').addEventListener('change', setSelectedLoves);

// 给所有的文本框注册事件，若用户在输入的过程中按下了ESC，则将文本框清空
var txts = document.querySelectorAll('.txt');
for (var i = 0; i < txts.length; i++) {
  txts[i].addEventListener('keydown', hanleKeyDown);
}

function hanleKeyDown(e) {
  if (e.key === 'Escape') {
    this.value = '';
  }
}
