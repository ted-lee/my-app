import {
    BrowserRouter,
    Switch,
    Route,
    Link,
} from 'react-router-dom';

import AboutRoute from './pages/aboutPage/AboutRoute';
import UsersRoute from './pages/usersPage/UsersRoute';
import CounterRouter from './pages/counterPage/CounterRouter';

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/count">Count</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/about">
                        <AboutRoute />
                    </Route>
                    <Route path="/users">
                        <UsersRoute />
                    </Route>
                    <Route path="/count">
                        <CounterRouter />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

function Home() {
    return <h2>Home</h2>;
}

