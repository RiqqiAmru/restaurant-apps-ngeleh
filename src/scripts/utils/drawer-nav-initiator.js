const DrawerNavInitiator = {
  init({button, drawer, content}) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        drawer.classList.remove('open');
      }
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerNavInitiator;
