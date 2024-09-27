function toggleMenu() {
  let menu = document.getElementById('menu');
  let closeIcon = document.getElementById('close')
 
  if (menu.style.left === '0px') {
    menu.style.left = '-100%';
    closeIcon.style.display = 'none';
  } else {
    menu.style.left = '0px';
    closeIcon.style.display = 'block'
  }
};