importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.precaching.precacheAndRoute([
    '/index.htm',
    '/js/index.js',
    '/img/add.jpeg',
    '/img/add.svg',
    '/img/todolist_logo copy.gif',

    
    '/css/styles.css'

]);

workbox.routing.registerRoute(
    /\.htm(l?)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'html-cache',
    })
);
workbox.routing.registerRoute(
    /\.js$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'js-cache',
    })
);
workbox.routing.registerRoute(
    /\.css$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'css-cache',
    })
);


