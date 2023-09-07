import { createContext } from 'react';

const UserContext = createContext({
  user: {
    name: 'Default Name',
    email: 'default@gmail.com',
  },
});

UserContext.displayName = 'UserContext'; // This is to display the same name in console

export default UserContext;
