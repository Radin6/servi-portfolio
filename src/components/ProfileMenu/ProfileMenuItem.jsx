import React from "react";

import {Box, HStack, Icon, Text} from "@/components/chakra-client/components";

export const ProfileMenuItem = ({icon, text = "", onClick = () => {}}) => {
  return (
    <HStack alignItems={{base: "center"}} flexDirection={{base: "row"}} w="full">
      <Box
        _hover={{
          color: "brand.mainText",
        }}
        alignItems="center"
        color="brand.secondaryText"
        cursor="pointer"
        display="flex"
        gap="8px"
        paddingX="6px"
        paddingY="8px"
        rounded="4px"
        w="full"
        onClick={onClick}
      >
        <Icon as={icon} h={7} w={7} />
        <Text fontSize="xs" fontWeight={400}>
          {text}
        </Text>
      </Box>
    </HStack>
  );
};
