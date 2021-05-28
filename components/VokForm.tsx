import Layout from "@/components/Layout";
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Stack,
  FormErrorMessage,
  Button,
  CloseButton,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NEXT_URL } from "../config";

interface IVok {
  korean: string;
  english: string;
}

const VokForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const router = useRouter();
  const [fehler, setFehler] = useState({ state: false, msg: "" });

  //Create Vok
  const createVok = async (data: IVok) => {
    const { korean, english } = data;
    try {
      const { data: vok } = await axios.post(`${NEXT_URL}/api/voks`, {
        korean,
        english,
      });
      //   console.log(vok);
      if (vok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error.response);
      setFehler({ state: true, msg: "There was an error while creating 🥲" });
    }
  };

  return (
    <Box mt={8} maxW="calc(100vh - 500px)">
      <form onSubmit={handleSubmit(createVok)}>
        <Stack spacing="6">
          {fehler.state && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle mr={2}>{fehler.msg}</AlertTitle>
            </Alert>
          )}

          <FormControl isInvalid={errors.korean}>
            <FormLabel>Korean</FormLabel>
            <Input
              type="text"
              placeholder="Korean word"
              id="korean"
              {...register("korean", { required: "This is required" })}
            ></Input>
            <FormErrorMessage>
              {errors.korean && errors.korean.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.english}>
            <FormLabel>English</FormLabel>
            <Input
              type="text"
              placeholder="English word"
              id="english"
              {...register("english", { required: "This is required" })}
            ></Input>
            <FormErrorMessage>
              {errors.english && errors.english.message}
            </FormErrorMessage>
          </FormControl>
          <Button isLoading={isSubmitting} type="submit" colorScheme="blue">
            Create
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default VokForm;
