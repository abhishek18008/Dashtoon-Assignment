// src/components/FormSection.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, FormControl, FormLabel, Button, Text, Textarea, Spinner } from "@chakra-ui/react";
import { addImage } from '../features/generatedImages/generatedImagesSlice';

const API_TOKEN = "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";

function FormSection() {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function query(data) {
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4",
        {
          headers: {
            Accept: "image/png",
            Authorization: `Bearer ${API_TOKEN}`,
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Image generation failed");
      }

      const res = await response.blob();
      return URL.createObjectURL(res);
    } catch (error) {
      throw error;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const imageURL = await query({ inputs: inputData.text });
      localStorage.setItem('Image', imageURL);
      // Use Redux action to add generated image to the store
      dispatch(addImage(imageURL));
    } catch (error) {
      setError("An error occurred while generating the image.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box p="4" maxWidth={'300px'} minWidth={"300px"}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="text">Text</FormLabel>
          <Textarea
            id="text"
            placeholder="Horse Flying on Aeroplane"
            value={inputData.text}
            onChange={(e) =>
              setInputData({ ...inputData, text: e.target.value })
            }
          />
        </FormControl>

        <Button
          mt="4"
          colorScheme="blue"
          type="submit"
          isLoading={isLoading}
          isDisabled={isLoading}
        >
          {isLoading ? <Spinner size="sm" /> : "Generate Image"}
        </Button>

        {error && <Text color="red.500">{error}</Text>}
      </form>
    </Box>
  );
}

export default FormSection;
