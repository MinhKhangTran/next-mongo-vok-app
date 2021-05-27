import { Avatar, Flex, HStack, Text } from "@chakra-ui/react";
import * as React from "react";

export interface IUserProfileProps {
  name: string;
  image: string;
  email: string;
}

export const UserProfile = (props: IUserProfileProps) => {
  const { name, image, email } = props;
  return (
    <HStack spacing="4" px="2">
      <Avatar name={name} />
      <Flex direction="column">
        <Text fontWeight="medium">{name}</Text>
        <Text fontSize="sm" lineHeight="shorter">
          {email}
        </Text>
      </Flex>
    </HStack>
  );
};
