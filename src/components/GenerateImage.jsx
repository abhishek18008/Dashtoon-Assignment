import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Image,
} from "@chakra-ui/react";

const API_TOKEN="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";

async function query(data) {
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
    throw new Error("Failed to generate image");
  }

  const blob = await response.blob();
  return blob;
}

function ImageGenerator() {
  const [inputText, setInputText] = useState("");
  const [generatedImage, setGeneratedImage] = useState(null);

  const handleGenerateImage = async () => {
    if (inputText) {
      const data = { inputs: inputText };
      const imageBlob = await query(data);

      // Convert the Blob to a data URL for displaying in an Image component
      const imageUrl = URL.createObjectURL(imageBlob);

      setGeneratedImage(imageUrl);
    }
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
      <FormControl>
        <FormLabel>Enter Input Text:</FormLabel>
        <Input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Astronaut riding a horse"
        />
      </FormControl>

      <Button
        colorScheme="teal"
        mt={4}
        onClick={handleGenerateImage}
        disabled={!inputText}
      >
        Generate Image
      </Button>

      {generatedImage && (
        <Box mt={4}>
          <Image src={generatedImage} alt="Generated Image" />
        </Box>
      )}
    </Box>
  );
}

export default ImageGenerator;
