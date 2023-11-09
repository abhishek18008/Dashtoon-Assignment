import {
  Box,
  FormControl,
  FormLabel,
  Button,
  Text,
  Textarea,
  Image,
  Spinner, // Import Spinner component from Chakra UI
} from "@chakra-ui/react";
import { useState } from "react";

const API_TOKEN = "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";
// const API_TOKEN = "VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM";

function FormSection({ addImage }) {
  const [inputData, setInputData] = useState({});

  const [generatedImage, setGeneratedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function query(data) {
    //console.log("Data received is", data);
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4",
        // "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
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
      setGeneratedImage(imageURL);
      addImage(imageURL);
    } catch (error) {
      setError("An error occurred while generating the image.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box p="4">
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

      {/*  */}
    </Box>
  );
}

export default FormSection;
