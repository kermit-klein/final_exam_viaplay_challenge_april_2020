import React, { useState, useEffect } from "react";

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
          response.yourDataObject._embedded["viaplay:blocks"][0]._embedded[
            "viaplay:products"
          ]
        );
      } catch (error) {
        setErrorMessage(error.response);
      }
    })();
  }, []);

  return <div>HALLO</div>;
};

export default App;
