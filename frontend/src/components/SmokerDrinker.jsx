import React from "react";
import classes from "@/styles/SmokerDrinker.module.css";

const SmokerDrinker = ({ smokerDrinkerResult }) => {
  return (
    <div className={classes.container}>
      <div className={classes.box} data-test="smoker-drinker-popup">
        {smokerDrinkerResult.map((item, index) => (
          <div key={index} className={classes.items}>
            {Object.entries(item).map(([modelName, modelData]) => (
              <div
                key={modelName}
                className={classes.item}
                data-test={`smoker-drinker-items${index}`}
              >
                <h2>{modelName}</h2>
                {Object.entries(modelData).map(([action, actionData]) => (
                  <div
                    key={action}
                    className={classes.item_subpart}
                    data-test={`smoker-drinker-subitems${action}`}
                  >
                    <h3>{action}</h3>
                    <p>Result: {actionData.result}</p>
                    <p>Probability: {actionData.probability}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmokerDrinker;
