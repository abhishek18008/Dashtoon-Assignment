import React from 'react';
import { Box, Text, Grid, GridItem, Button, Select } from '@chakra-ui/react';

const comics = [
  { title: 'Comic 1', genre: 'Action', image: 'https://via.placeholder.com/150' },
  { title: 'Comic 2', genre: 'Adventure', image: 'https://via.placeholder.com/150' },
  { title: 'Comic 3', genre: 'Fantasy', image: 'https://via.placeholder.com/150' },
  { title: 'Comic 4', genre: 'Fantasy', image: 'https://via.placeholder.com/150' },
  { title: 'Comic 5', genre: 'Romance', image: 'https://via.placeholder.com/150' },
  { title: 'Comic 6', genre: 'Ashleel', image: 'https://via.placeholder.com/150' },
  { title: 'Comic 7', genre: 'Fantasy', image: 'https://via.placeholder.com/150' },
  // Add more comics with title, genre, and image URL
];

const Dashboard = () => {
  return (
    <Box p={4}>
      <Select placeholder="Filter by Genre">
        <option value="all">All Genres</option>
        <option value="action">Action</option>
        <option value="adventure">Adventure</option>
        <option value="fantasy">Fantasy</option>
      </Select>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {comics.map((comic, index) => (
          <GridItem key={index} colSpan={1}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <img src={comic.image} alt={comic.title} />
              <Box p={4}>
                <Text fontWeight="bold" fontSize="lg">
                  {comic.title}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {comic.genre}
                </Text>
                <Button colorScheme="teal" size="sm">
                  View Comic
                </Button>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
