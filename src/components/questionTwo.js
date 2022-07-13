import { Flex } from "@chakra-ui/react";
import React from "react";
import data from "../data/gasdata.json";
import { BarGraph } from "react-d3-bar-graph";

// console.log(data);
//sort by price per gallon but remove the decimal places


const mostExpensiveGas = data
  .sort((a, b) => b["Price Per Gallon (USD)"] - a["Price Per Gallon (USD)"])
  .filter((_, i) => i < 5);

// console.log(mostExpensiveGas);

const QuestionTwo = () => {
  return(
    <Flex>
      <BarGraph
        width={800}
        height={400}
        yRange={60}
        xValue="Country"
        yValue="Price Per Gallon (USD)"
        data={mostExpensiveGas}
        ticks={5}
        axisStyles={{
          color: "black",
          "font-size": "15px",
        }}
        xAxisSlanted={true}
      />
    </Flex>
  )
}
export default QuestionTwo;