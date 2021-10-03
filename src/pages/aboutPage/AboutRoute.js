import React from "react";
import { Route }from 'react-router-dom';
import AboutContainer from "./AboutContainer";

class AboutRoute extends React.PureComponent {

    /** @override*/
   render() {
       return (
           <Route exact={true} path="/about">
               <AboutContainer/>
           </Route>
       );
    }
}

export default AboutRoute;
