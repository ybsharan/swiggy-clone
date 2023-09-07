import { render } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import { StaticRouter, StaticRouterProvider } from 'react-router-dom/server';

test('Logo should load on rendering header', () => {
  //Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getAllByTestId('logo');
  expect(logo[0].src).toBe('http://localhost/dummyLogo.png');
});

test('Online Status should be green on rendering header', () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const onlineStatus = header.getByTestId('online-status');
  expect(onlineStatus.innerHTML).toBe('🟢nline');
});

test('cart should have 0 items on rendering', () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId('cart');

  expect(cart.innerHTML).toBe('0');
});
