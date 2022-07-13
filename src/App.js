import { Flex } from "@chakra-ui/react";
import QuestionOne from "./components/questionOne";
import QuestionThree from "./components/questionThree";
import QuestionTwo from "./components/questionTwo";

function App() {
  return (
    <>
      <Flex
        w={["100%", "100%", "100%", "100%", "100%"]}
        h="200vh"
        justifyContent="center"
        alignItems="center"
        flexDir={"column"}
        bgGradient="linear(to-r, #390099, #9e0059, #ff0054, #ff5400, #ffbd00)"
      >
        <Flex w='auto' h='auto' bg='white' borderRadius={20} flexDir='column' p={10}>
          <QuestionOne />
          <QuestionTwo />
          <QuestionThree />
        </Flex>
      </Flex>
    </>
  );
}

export default App;
