import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

import AboutRoute from './pages/aboutPage/AboutRoute';
import CardRoute from './pages/cardPage/CardRoute';
import CounterRouter from './pages/counterPage/CounterRouter';

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/about">
                        <AboutRoute />
                    </Route>
                    <Route path="/">
                        <CardRoute />
                    </Route>
                    <Route path="/count">
                        <CounterRouter />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
