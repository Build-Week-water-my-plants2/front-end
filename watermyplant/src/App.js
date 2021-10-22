import React, { useState } from "react"
import './App.css';
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PlantForm from "./components/PlantForm";
import Home from "./components/Home";
import Footer from "./components/Footer";
import PlantList from "./components/PlantList";
import Header from "./components/Header"
import UserProfile from "./components/UserProfile";


const initial_plant_values = [];

function App() {
    const [plants, set_plant_values] = useState(initial_plant_values);

    return (
        <div className="App">
            <div>
                <Header />
            </div>
                <div id="app-body">
                    <Switch>
                        <PrivateRoute path="/profile">
                            <UserProfile />
                        </PrivateRoute>
                        <PrivateRoute path="/PlantForm">
                            <PlantForm plants = {plants} set_plant_values={set_plant_values}/>
                        </PrivateRoute>
                        <PrivateRoute path="/PlantList">
                            <PlantList set_plant_values={set_plant_values} plants={plants}/>
                        </PrivateRoute>
                        <Route path="/signup">
                            <Signup />
                        </Route>
                        <Route path="/login" component={Login}/>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            <Footer/>
        </div>
    )
}

export default App;