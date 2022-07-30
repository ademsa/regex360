import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Learn from "./components/Learn";
import Reference from "./components/Reference";
import Experiment from "./components/Experiment";
import Recipes from "./components/Recipes";
import Resources from "./components/Resources";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import "./App.css";

export default function App() {
  React.useEffect(() => {
    document.title = "RegEx360";
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/404"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          ></Route>
          <Route
            exact
            path="/resources"
            element={
              <Layout>
                <Resources />
              </Layout>
            }
          ></Route>
          <Route
            exact
            path="/recipes"
            element={
              <Layout>
                <Recipes />
              </Layout>
            }
          ></Route>
          <Route
            exact
            path="/experiment"
            element={
              <Layout>
                <Experiment />
              </Layout>
            }
          ></Route>
          <Route
            exact
            path="/reference"
            element={
              <Layout>
                <Reference />
              </Layout>
            }
          ></Route>
          <Route
            exact
            path="/learn"
            element={
              <Layout>
                <Learn />
              </Layout>
            }
          ></Route>
          <Route
            exact
            path="/home"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          ></Route>
          <Route
            exact
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          ></Route>
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}
