import React from 'react';
import './index.css';
import Header from './components/header/Header';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Games from './components/games/Games';
import Game from './components/games/game/Game';
import Home from './components/home/Home';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/games" component={Games} />
          <Route path="/game" component={Game} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;