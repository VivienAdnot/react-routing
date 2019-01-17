import React from 'react';
import { AppContext } from '../AppProvider';

const Home = () => (
    <div>
      <h1>Welcome to the Tornadoes Website!</h1>
      <AppContext.Consumer>
          {(context) => context.number}
      </AppContext.Consumer>
    </div>
  );

export default Home;