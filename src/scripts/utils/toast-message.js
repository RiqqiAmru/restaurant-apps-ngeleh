const ToastMessage = {
  show: (message, type) => {
    const toast = document.createElement('div');
    toast.classList.add('toast', type);
    // make a loading animation
    toast.innerHTML = message;
    const loading = document.createElement('div');
    loading.classList.add('toast');
    document.body.appendChild(toast);
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 4000);
  },
};

export default ToastMessage;
