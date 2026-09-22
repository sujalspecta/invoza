import React, { Component } from "react";
import routes from "./routes";
import {
  Route,
  Routes
} from "react-router-dom";

// Import Scss
import "./theme.scss";

//Import Icon Css
import "./assets/css/materialdesignicons.min.css";
import withRouter from "./components/withRouter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Routes>
          {routes.map((route, idx) => (
            <Route path={route.path} element={route.component} key={idx} />
          ))}
        </Routes>
      </React.Fragment>
    );
  }
}

export default withRouter(App);