import {
    BrowserRouter,
    Switch,
    Route,
    Link,
} from 'react-router-dom';

import AboutRoute from './pages/aboutPage/AboutRoute';
import CardRoute from './pages/cardPage/CardRoute';
import CounterRouter from './pages/counterPage/CounterRouter';

import styles from './App.module.css';

export default function App() {
    return (
        <BrowserRouter>
            <div className={styles.root}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/card">Card</Link>
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
                    <Route path="/card">
                        <CardRoute />
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

