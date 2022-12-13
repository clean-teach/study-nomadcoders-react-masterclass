import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Coin from './routes/Coin';
import Coins from './routes/Coins';

interface IProps {
  isDark: boolean;
  onDarkModeChange: () => void;
}

function Router({ isDark, onDarkModeChange }: IProps) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/:coinId">
          <Coin isDark={isDark} onDarkModeChange={onDarkModeChange} />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
