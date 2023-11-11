import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import FormSection from "./FormSection";
import TopBar from "./TopBar";
import MainArea from "./MainArea";

function Layout() {
  return (
    <Flex height="91vh">
      {/* Sidebar/Form Section */}
        <FormSection />

      
      <Flex flex="1" flexDirection="column" width={"100%"}>
        {/* Top Bar */}
        {/* <Box bg="blue.500" height="250px"> */}
          <TopBar />
        {/* </Box> */}

        {/* Main Area */}
        <Flex flex="1" p="4">
          <MainArea />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Layout;
