import React, { Component } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";

import { fetchData } from "./api";

import logo from './imgs/image.png';

class App extends Component {
  state = {
    data: {},
    country: ''
  };

  handleCountryChange = async(country)=>{
    console.log(country);
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    this.setState({ data: fetchedData, country: country });
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    console.log(fetchedData);
    this.setState({ data: fetchedData });
  }

  render() {
    const { data,country } = this.state;
    console.log(data, country);
    return (
      <div className={styles.container}>
        <img 
        className={styles.image}
        alt="COVID-19"
        src={logo}
        />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart  data={data} country={country} />
      </div>
    );
  }
}

export default App;
