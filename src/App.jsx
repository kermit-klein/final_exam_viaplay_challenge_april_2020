import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [series, setSeries] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    (async () => {
      try {
        let response = await axios.get(
          "https://content.viaplay.se/pc-se/serier/samtliga"
        );

        setSeries(
          response.data._embedded["viaplay:blocks"][0]._embedded[
            "viaplay:products"
          ]
        );
      } catch (error) {
        setErrorMessage(error.response);
      }
    })();
  }, []);

  let showSeries;
  if (series) {
    showSeries = series.map((serie) => {
      return (
        <div className="display-show">
          <img src={serie.content.images.landscape.url} alt="oops" />
        </div>
      );
    });
  }

  return (
    <>
      <div className="fixed-header">
        <img src="https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg" />
      </div>
      <div>{showSeries}</div>
      <div className="fixed-footer"></div>
    </>
  );
};

export default App;
