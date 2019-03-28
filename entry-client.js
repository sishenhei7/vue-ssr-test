import { createApp } from './app';
import { Store } from 'vuex';

const { app, router } = createApp();

if (window.__INITIAL_STATE__) {
  Store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
  app.$mount('#app');
});
