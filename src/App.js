import React, { Suspense, lazy, useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Error from './components/Error';
import About from './components/About';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import ProfileClass from './components/ProfileClass';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import store from './utils/store';
import Cart from './components/Cart';

const Instamart = lazy(() => import('./components/Instamart'));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: 'Sharan',
    email: 'bsharanyadav@gmail.com',
  });

  return (
    <>
      <Provider store={store}>
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
        children: [
          {
            path: 'profile',
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />,
      },
      {
        path: '/instamart',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);

/**
 * App Layout
 *
 * Header
 *    - Logo (Title)
 *    - Nav Items
 *    - Cart
 * Body
 *    - SearchBar
 *    - ResturantCard
 *         - Image
 *         - Name
 *         - Rating
 *         - Cunines (North indian, South Indian, Punjabi)
 * Footer
 *         - Link
 *         - Copyrights
 *
 */
