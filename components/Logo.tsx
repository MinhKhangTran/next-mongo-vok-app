import { Heading } from "@chakra-ui/react";
import * as React from "react";
import Link from "next/link";
export interface ILogoProp {
  color: string;
}

export const Logo = (props: ILogoProp) => {
  return (
    <Heading fontSize="xl" color={props.color}>
      <Link href="/">VokApp</Link>
    </Heading>
  );
};
