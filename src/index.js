import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import nav_es from './languages/es/nav.json';
import nav_en from './languages/en/nav.json';

import about_es from './languages/es/about.json';
import about_en from './languages/en/about.json';

import cover_es from './languages/es/cover.json';
import cover_en from './languages/en/cover.json';

import footer_es from './languages/es/footer.json';
import footer_en from './languages/en/footer.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      nav: nav_en,
      about: about_en,
      cover: cover_en,
      footer: footer_en,
    },
    es: {
      nav: nav_es,
      about: about_es,
      cover: cover_es,
      footer: footer_es,
    },
  },
});

ReactDOM.render(
  <HashRouter>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </HashRouter>,
  document.getElementById('root')
);
