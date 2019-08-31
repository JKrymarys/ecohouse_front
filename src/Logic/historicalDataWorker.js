import axios from "axios";
import { allHouseDataEntries, allWeatherEntries } from "../env";

export async function GetHistoricalData() {
  function getAllHouseData() {
    return axios.get(allHouseDataEntries);
  }
  function getAllWeatherData() {
    return axios.get(allWeatherEntries);
  }

  return axios
    .all([getAllWeatherData(), getAllHouseData()])
    .then(
      axios.spread((weather, housedata) => {
        return {
          weather: weather.data[0],
          housedata: housedata.data[0]
        };
      })
    )
    .then(({ weather, housedata }) => {
      const tempHouseTemperatures = housedata.reduce((chartData, el) => {
        chartData[el.datetime.value] = el.temp_house;
        return chartData;
      }, {});

      const tempWeatherTemperatures = weather.reduce((chartData, el) => {
        chartData[el.datetime.value] = el.temp;
        return chartData;
      }, {});

      return {
        tempHouseChartData: tempHouseTemperatures,
        tempWeatherChartData: tempWeatherTemperatures
      };
    });
}
