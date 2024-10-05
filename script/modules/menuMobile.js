export default function InitMenuMobile() {
  const menuMobile = document.querySelector('.iconMenu');
  const listaMenu = document.querySelector('.listaMenu');

  if (menuMobile) {
    function showMenu() {
      listaMenu.classList.toggle('activeMenu');
      console.log('eae');
    }
    menuMobile.addEventListener('click', showMenu);
  }
}
