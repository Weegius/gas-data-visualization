import { Flex } from "@chakra-ui/react";
import React from "react";
import data from "../data/gasdata.json";
import { BarGraph } from "react-d3-bar-graph";

const Gallon = data
  // .forEach(item => console.log(item["Daily Oil Consumption (Barrels)"].split(",")))
  .sort(
    (a, b) =>
      parseInt(b["Daily Oil Consumption (Barrels)"].split(",").join("")) -
      parseInt(a["Daily Oil Consumption (Barrels)"].split(",").join(""))
  )
  .map((item) => {
    return {
      ...item,
      "Daily Oil Consumption (Barrels)": parseInt(
        item["Daily Oil Consumption (Barrels)"].split(",").join("")
      ),
    };
  })
  .filter((_, i) => i < 5);

console.log(Gallon[0]["Daily Oil Consumption (Barrels)"]);
// console.log(data)

const QuestionThree = () => {
  return (
    <Flex>
      <BarGraph
        width={800}
        height={400}
        yRange={20000000}
        xValue="Country"
        yValue="Daily Oil Consumption (Barrels)"
        data={Gallon}
        ticks={5}
        axisStyles={{
          color: "black",
          "font-size": "15px",
        }}
        xAxisSlanted={true}
        title="Country with the most daily oil consumption"
      />
    </Flex>
  );
};
export default QuestionThree;
