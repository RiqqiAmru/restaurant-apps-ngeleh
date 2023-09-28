const CustomLoading = {
  show: (parent) => {
    const loading = document.createElement('div');
    loading.classList.add('loading');
    loading.innerHTML = `
    <div class="loading__container">
      <div class="loading__item"></div> 
      <div class="loading__item"></div>
      <div class="loading__item"></div>
    </div>
    <p class="loading__text">Ngeleh, Nteni dilut...</p>
    `;

    parent.appendChild(loading);
  },
  hide: (parent) => {
    const loading = parent.querySelector('.loading');
    if (loading) {
      parent.removeChild(loading);
    }
  },

};

export default CustomLoading;
