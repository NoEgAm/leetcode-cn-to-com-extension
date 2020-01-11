function initJumpBtn() {
  const toolsEle = document.getElementsByClassName('css-nj515r-Tools e171bd604')[0];
  var btn = document.createElement('button');
  btn.setAttribute('class', 'css-atw98h-Button e167268t1 cn-to-com-btn');
  targetPath = window.location.pathname.replace(/(\/\w+\/[\w-]+)(\/\w+)+/g, '$1');
  btn.innerHTML = `<span><a href="https://leetcode.com${targetPath}discuss/?currentPage=1&orderBy=most_votes" target="_blank">国际站高票讨论</a></span>`;
  toolsEle.appendChild(btn);
}

function init() {
  initJumpBtn();
}

window.addEventListener("load", init);
// Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
