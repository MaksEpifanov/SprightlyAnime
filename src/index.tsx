import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import App from 'app/App';

import GlobalStyles from 'styles/global.styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <HashRouter>
      <GlobalStyles />
      <App />
    </HashRouter>
  </Provider>,
);
