import { useRouteMatch } from "react-router-dom";
import CardContainer from "./CardContainer";

export default function CardRoute() {
    let match = useRouteMatch({
        path: "/card",
        exact: true,
    });

    return (
        <div>
            {match && <CardContainer /> }
        </div>
    );
}