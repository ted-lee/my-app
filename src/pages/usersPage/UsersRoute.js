import { useRouteMatch } from "react-router-dom";
import UsersContainer from "./UsersContainer";

export default function UsersRoute() {
    let match = useRouteMatch({
        path: "/users",
        exact: true,
    });

    return (
        <div>
            {match && <UsersContainer /> }
        </div>
    );
}