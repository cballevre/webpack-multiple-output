import React from "react";
import ReactDOM from "react-dom";

import { SharedComponent } from "../../components/SharedComponent";

const Index = () => {
  return <div>This is a private context !
     <SharedComponent />
  </div>;
};

ReactDOM.render(<Index />, document.getElementById("app"));