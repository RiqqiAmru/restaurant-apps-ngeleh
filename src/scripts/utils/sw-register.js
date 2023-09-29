import {Workbox} from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service worker not supported in this browser');
    return;
  }

  const wb = new Workbox('./sw.js');

  try {
    await wb.register();
    console.log('Service worker registered');
  } catch (err) {
    console.log('Service worker registration failed', err);
  }
};

export default swRegister;
