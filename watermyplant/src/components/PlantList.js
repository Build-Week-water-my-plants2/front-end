import React, { useEffect } from "react";
import { useHistory, Link } from 'react-router-dom';


const PlantList = (props) => {
    const { plants, isFetching, error } = props;
    const history = useHistory();

    useEffect(() => {
        props.getPlants();
    }, []);

    if (isFetching) {
        return <h2>Fetching Plant Stand By...</h2>;
    }
    if (error) {
        return <h2>Error: {error}</h2>;
    }

    const deleteItem = (plants) => {
        axiosWithAuth()
            .delete(`plants/${plants.plant_id}`)
            .then((res) => {
                console.log(res);
                console.log('Plants.plant_id', plants.plant_id);
                props.deletePlant(plants.plant_id);

            })
            .catch((err) => console.log(err));
    };

    const editPlant = (plants) => {
        deleteItem(plants);
        history.push("editPlant");
    };

    return (
        <PlantList>
            <header>
                <h1 id="hide"> Water My Plants </h1>
                <nav>
                    <Link to="/"> Home </Link>
                    <Link to="/plantList"> My Plants </Link>
                    <Link to="/addPlant"> Add Plants </Link>
                </nav>
            </header>
            <main className="plant-list">
                {plants.map((plants) => (
                    <div className="plant-card" key={plants.plant_id}>
                        <div className="plant-details">
                            <h2>{plants.nickname}</h2>
                            <p>Amount of Water Needed: {plants.h2oFrequency}</p>
                            <p>Species: {plants.species}</p>
                            <button onClick={() => editPlant(plants)}>Edit</button>{" "}
                            <button onClick={() => deleteItem(plants)}>Delete</button>
                        </div>
                    </div>
                ))}
            </main>
        </PlantList>
    );
};

const mapStateToProps = (state) => {
    return {
        plant: state.plantList,
        isFetching: state.isFetching,
        error: state.error,

    };
};

export default connect(mapStateToProps, { getPlants, fetchFail, deletePlant })(PlantList);