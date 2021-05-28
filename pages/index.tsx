import { Card } from "@/components/Card";
import { CardContent } from "@/components/CardContent";
import { CardHeader } from "@/components/CardHeader";
import Layout from "@/components/Layout";
import { Property } from "@/components/Property";
import { ButtonGroup, IconButton } from "@chakra-ui/button";
import { Box, Flex, Grid, Heading, Spacer } from "@chakra-ui/layout";
import axios from "axios";

import { NEXT_URL } from "../config";
import { HiPencilAlt } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

import Moment from "react-moment";
import { useState } from "react";
import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import { Spinner } from "@chakra-ui/spinner";

interface IVoks {
  _id: string;
  korean: string;
  english: string;
  createdAt: string;
  updatedAt: string;
}

const HomePage = () => {
  const [show, setShow] = useState("");
  const router = useRouter();
  const { data, error } = useSWR<IVoks[], any>("/api/voks");

  const deleteVok = async (id: string) => {
    try {
      const { data } = await axios.delete(`${NEXT_URL}/api/voks/${id}`);
      if (data) {
        mutate("/api/voks");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (error) return <Box>failed to load...</Box>;
  if (!data) return <Spinner />;

  return (
    <Layout title="VokApp | Homepage">
      <Heading color="blue.300" fontSize="2xl" as="h1">
        Voks
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap="4"
      >
        {data?.map((vok, index) => {
          return (
            <Card mt={8} key={vok._id} maxW="3xl" mx="auto">
              <CardContent>
                <Property label="Korean" value={vok.korean} />
                <Property label="English" value={vok.english} />

                <Flex align="center" px="6" py="4" color="gray.500">
                  <Moment fromNow>
                    {vok.createdAt === vok.updatedAt
                      ? vok.createdAt
                      : vok.updatedAt}
                  </Moment>
                  <Spacer></Spacer>
                  <IconButton
                    aria-label="settings"
                    icon={<IoMdSettings />}
                    colorScheme="gray"
                    fontSize="15px"
                    variant="ghost"
                    onClick={() => {
                      if (show.length > 0) {
                        setShow("");
                      } else {
                        setShow(vok._id);
                      }
                    }}
                  ></IconButton>
                </Flex>
              </CardContent>
              {show === vok._id && (
                <CardHeader
                  action={
                    <ButtonGroup>
                      <IconButton
                        aria-label="edit"
                        icon={<HiPencilAlt />}
                        colorScheme="blue"
                        fontSize="15px"
                        size="sm"
                        onClick={() => {
                          router.push(`/v/${vok._id}`);
                        }}
                      />
                      <IconButton
                        aria-label="delete"
                        icon={<FaTrash />}
                        colorScheme="red"
                        fontSize="15px"
                        size="sm"
                        onClick={() => {
                          deleteVok(vok._id);
                        }}
                      />
                    </ButtonGroup>
                  }
                />
              )}
            </Card>
          );
        })}
      </Grid>
    </Layout>
  );
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { data } = await axios(`${NEXT_URL}/api/voks`);
//   // console.log(voks);

//   return {
//     props: { data },
//   };
// };

export default HomePage;
