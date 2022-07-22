import home from './home';
import menu from './menu';
import contacts from './contacts';

const render = (() => {
  const header = document.querySelector('header');
  const navItems = ['home', 'menu', 'contacts'];

  function renderHeader() {
    // Logo
    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.setAttribute('src', './img/logo.png');
    logo.setAttribute('alt', 'foodzone  logo');
    header.appendChild(logo);
    // Navigation
    const nav = document.createElement('nav');
    nav.classList.add('navigation');
    header.appendChild(nav);
    // Menu items
    for (let i = 0; i < navItems.length; i += 1) {
      const navItem = document.createElement('a');
      navItem.id = navItems[i];
      navItem.classList.add('nav-link');
      navItem.setAttribute('href', '#');
      navItem.textContent = navItems[i].toUpperCase();
      nav.appendChild(navItem);
    }
  }

  function buttonsHandler() {
    const menuItems = document.querySelectorAll('.navigation a');
    const menuItemHome = menuItems[0];
    const menuItemMenu = menuItems[1];
    const menuItemContacts = menuItems[2];

    function removeCurrentClass() {
      menuItems.forEach((element) => {
        element.classList.remove('current');
      });
    }

    document.addEventListener('click', (event) => {
      removeCurrentClass();
      if (event.target.id === 'home' || event.target.className === 'logo') {
        home.render();
        menuItemHome.classList.add('current');
      } else if (event.target.id === 'menu' || event.target.className === 'home-button') {
        menu.render();
        menuItemMenu.classList.add('current');
      } else if (event.target.id === 'contacts') {
        contacts.render();
        menuItemContacts.classList.add('current');
      }
    });
  }

  renderHeader();
  home.render();
  buttonsHandler();
})();
