import { useRouteMatch } from 'react-router-dom';
//import CounterContainer from './CounterContainer';
import CounterContainer from './CounterHooksContainer';

export default function CounterRouter() {
    let match = useRouteMatch({
        path: '/count',
        exact: true,
    });

    return (
        <div>
            {match && <CounterContainer /> }
        </div>
    );
}