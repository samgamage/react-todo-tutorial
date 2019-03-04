import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import TodoList from "./components/TodoList";

const App = () => (
  <div className="App">
    <CssBaseline>
      <TodoList />
    </CssBaseline>
  </div>
);

export default App;
