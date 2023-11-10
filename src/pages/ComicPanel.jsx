import React from "react";
import { Box, Grid, Image, Text, Flex } from "@chakra-ui/react";

const ComicPanel = ({ comicImages }) => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={4} p={4}>
      {comicImages.map((image, index) => (
        <Box key={index} boxShadow="lg" borderRadius="md" overflow="hidden">
          <Image src={image.url} alt={`Comic Image ${index + 1}`} h="200px" w="100%" objectFit="cover" />

          <Flex align="center" justify="center" p={2} bg="gray.800" color="white">
            <Text textAlign="center">{image.caption}</Text>
          </Flex>
        </Box>
      ))}
    </Grid>
  );
};

export default ComicPanel;
