import axios from "axios";

const BASE_URL =
  "https://api.worldbank.org/v2/country/US/indicator/SP.POP.TOTL";

export const getPopulationData = async () => {
  const response = await axios.get(BASE_URL, {
    params: {
      date: "2012:2016",
      format: "json",
    },
  });

  return response.data[1];
};