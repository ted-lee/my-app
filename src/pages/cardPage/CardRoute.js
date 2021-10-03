import { useRouteMatch } from "react-router-dom";
import CardContainer from "./CardContainer";

export default function CardRoute() {
    let match = useRouteMatch({
        path: "/",
        exact: true,
    });

    return (
        <div>
            {match && <CardContainer /> }
        </div>
    );
}