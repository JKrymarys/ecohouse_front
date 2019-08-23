import axios from "axios";
import { currentWatherApi } from "../env";

export async function GetCurrentWeather() {
  return axios.get(currentWatherApi).then(({ data }) => data);
}
