import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  useDisclosure,
  Button,
  Lorem,
} from "@chakra-ui/react";
import QuestionOne from "./components/questionOne";
import QuestionThree from "./components/questionThree";
import QuestionTwo from "./components/questionTwo";

function App() {
  return (
    <>
      <Flex justifyContent="center" alignItems="center" flexDir={"column"}>
        <QuestionOne />
        <QuestionTwo />
        <QuestionThree />
      </Flex>
    </>
  );
}

export default App;
