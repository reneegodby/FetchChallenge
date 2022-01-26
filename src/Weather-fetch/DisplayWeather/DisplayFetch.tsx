import React from "react";

type Temp = {
  temperature: number;
};

const LocalWeather: React.FunctionComponent<Temp> = (props) => {
  return (
    <div className="App-header">
      <h2>Local Temps</h2>
      <div>
        {props.temperature === 0 ? (
          "Click button to get your local temperature!"
        ) : (
          <h4>
            Temperature:
            {((props.temperature - 273.15) * 1.8 + 32).toFixed(0)} F
          </h4>
        )}
      </div>
    </div>
  );
};

export default LocalWeather;
