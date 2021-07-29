import React, { useEffect } from "react";
import "./styles.css";
import { connect } from "react-redux";
import { getCountries } from "./actions";

const App = (props) => {
  useEffect(() => {
    props.getCountries();
  }, []);

  console.log(props);
  return (
    <div className="App">
      <h2>React Router</h2>
      {props.isLoading ? (
        <p>
          <img
            style={{width:30,height:30}}
            src="https://cdna.artstation.com/p/assets/images/images/016/928/246/original/cloe-ferrara-loader1-0.gif?1554021979"
            alt="loading"
          />
        </p>
      ) : (
        props.countries.map((country) => {
          return (
            <div key={country.name}>
              <h3>{country.name}</h3>
              <h4>{country.capital}</h4>
              <p>
                <img
                  src={country.flag}
                  alt={country.name}
                  style={{ width: "100px" }}
                />
              </p>
            </div>
          );
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { getCountries })(App);
