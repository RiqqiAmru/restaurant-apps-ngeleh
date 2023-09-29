import {precacheAndRoute} from 'workbox-precaching';
import {registerRoute, Route} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(new Route(
    ({url}) =>
      url.pathname.endsWith('.png')), new StaleWhileRevalidate({
  cacheName: 'dicoding-restaurant-api-images',
}));

registerRoute(new Route(
    ({url}) =>
      url.href.startsWith('https://restaurant-api.dicoding.dev/'),
    new StaleWhileRevalidate({
      cacheName: 'dicoding-restaurant-api',
    })));

registerRoute(new Route(({url}) => url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com',
    new StaleWhileRevalidate({})));

self.addEventListener('install', () => {
  console.log('Installing Service Worker ...');
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  console.log('Activating Service Worker ...');
});

self.addEventListener('fetch', (event) => {
  console.log(event.request.method);
  console.log(event.request);
  // lewati request method post
  event.respondWith(
      caches.match(event.request, {ignoreSearch: true})
          .then((response) => {
            return response || fetch(event.request);
          }),
  );
});
