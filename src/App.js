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
        bgGradient="linear(to-r, #22577a, #38a3a5, #57cc99, #80ed99, #c7f9cc)"
      >
        <Flex w='auto' h='auto' bg='white' borderRadius={20} flexDir='column' p={10} dropShadow="5">
          <QuestionOne />
          <QuestionTwo />
          <QuestionThree />
        </Flex>
      </Flex>
    </>
  );
}

export default App;
