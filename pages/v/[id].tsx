import Layout from "@/components/Layout";
import VokForm from "@/components/VokForm";
import { NEXT_URL } from "@/config/index";
import { IVok } from "@/interfaces/vok";
import { Box, Heading } from "@chakra-ui/layout";
import axios from "axios";
import { GetServerSideProps } from "next";

const VokDetailpage = ({ data }: { data: IVok }) => {
  return (
    <Layout title="VokApp | XXX">
      <Heading fontSize="2xl" as="h1">
        Edit
      </Heading>
      <VokForm vok={data} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    //get id from params
    const id = context.params?.id;
    const { data } = await axios.get(`${NEXT_URL}/api/voks/${id}`);
    return { props: { data } };
  } catch (error) {
    //redirect to homepage
    console.log(error);
    context.res.statusCode = 302;
    context.res.setHeader("Location", "/");
    return { props: {} };
  }
};

export default VokDetailpage;
