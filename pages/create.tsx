import Layout from "@/components/Layout";
import VokForm from "@/components/VokForm";
import { Heading } from "@chakra-ui/react";

const CreatePage = () => {
  return (
    <Layout title="VokApp | Create">
      <Heading color="blue.300" fontSize="2xl" as="h1">
        Create
      </Heading>
      <VokForm />
    </Layout>
  );
};

export default CreatePage;
