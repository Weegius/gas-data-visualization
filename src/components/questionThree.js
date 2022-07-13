import { Flex } from "@chakra-ui/react";
import React from "react";
import data from "../data/gasdata.json";
import { BarGraph } from "react-d3-bar-graph";


const GDP = data
  .forEach(item => console.log(item["Daily Oil Consumption (Barrels)"]))
  .sort(
    (a, b) =>
      parseInt(b["Daily Oil Consumption (Barrels)"].split(",").join("")) -
      parseInt(a["Daily Oil Consumption (Barrels)"].split(",").join(""))
  )
  .filter((_, i) => i < 5);

// console.log(GDP);

const QuestionThree = () => {
  return (
    <Flex>
      <BarGraph
        width={800}
        height={400}
        yRange={1000000}
        xValue="Country"
        yValue="GDP Per Capita ( USD )"
        data={GDP}
        ticks={5}
        axisStyles={{
          color: "black",
          "font-size": "15px",
        }}
        xAxisSlanted={true}
      />
    </Flex>
  );
};
export default QuestionThree;
