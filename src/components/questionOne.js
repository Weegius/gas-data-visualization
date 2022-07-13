import { Flex } from "@chakra-ui/react";
import React from "react";
import data from "../data/gasdata.json";
import { BarGraph } from "react-d3-bar-graph";

// console.log(data);
//sort by daily oil consumption and remove the decimal places

const mostGasUsed = data
  .sort(
    (a, b) => b["Yearly Gallons Per Capita"] - a["Yearly Gallons Per Capita"]
  )
  .filter((_, i) => i < 5);

// console.log(mostGasUsed);
const QuestionOne = () => {
  return (
    <Flex>
      <BarGraph
        width={800}
        height={400}
        yRange={5000}
        xValue="Country"
        yValue="Yearly Gallons Per Capita"
        data={mostGasUsed}
        ticks={5}
        axisStyles={{
          color: "black",
          "font-size": "15px",
        }}
        xAxisSlanted={true}
        title="Country with the most yearly gallons per capita"
        // colors={["#ffbd00", "#ff5400", "#ff0054", "#9e0059", "#390099"]}
        titleStyles={{ "font-size": "20px", "font-weight": "bold" }}
      />
    </Flex>
  );
};
export default QuestionOne;
