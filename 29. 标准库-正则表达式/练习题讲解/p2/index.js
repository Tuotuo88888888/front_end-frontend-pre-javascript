var container = document.querySelector('.content');

var text = container.innerHTML;

var newHTML = text.replace(/\s+.+/g, function (s) {
  s = s.replace(/\s/g, '');
  s = '<p>' + s + '</p>';
  return s;
});

container.innerHTML = newHTML;
