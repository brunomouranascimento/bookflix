import React from "react";
import dotenv from "dotenv";
import Routes from "./routes";

import "./scss/App.scss";

dotenv.config();

const App = () => <Routes />;

export default App;
