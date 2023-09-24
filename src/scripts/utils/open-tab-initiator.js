const OpenTabInitiator = {
  openTab(evt, tabName) {
    let i;
    const tabcontent = document.getElementsByClassName('tab');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.add('none');
    }
    const tablinks = document.getElementsByClassName('btn_tab_pane');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('active');
    }
    document.getElementById(tabName).classList.remove('none');
    evt.currentTarget.classList.add('active');
  },
};


export default OpenTabInitiator;
