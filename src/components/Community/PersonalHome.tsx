import React from "react";
import { Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { FaReddit } from "react-icons/fa";

const PersonalHome: React.FC = () => {
  return (
    <Flex
      direction="column"
      bg="white"
      borderRadius={4}
      cursor="pointer"
      border="1px solid"
      borderColor="gray.300"
      position="sticky"
    >
      <Flex
        align="flex-end"
        color="white"
        p="6px 10px"
        bg="blue.500"
        height="80px"
        borderRadius="4px 4px 0px 0px"
        fontWeight={600}
        bgImage="url(/images/admoncentral.jpg)"
        backgroundSize="cover"
        backgroundPosition={300}
      ></Flex>
      <Flex direction="column" p="12px">
        <Flex align="center" mb={2}>
          <Text fontWeight={600}>Página principal</Text>
        </Flex>
        <Stack spacing={3}>
          <Text fontSize="9pt">
            Página principal, aquí podras hacer tus publicaciones.
          </Text>
          <Button height="30px">Crear post</Button>
        </Stack>
      </Flex>
    </Flex>
  );
};
export default PersonalHome;
