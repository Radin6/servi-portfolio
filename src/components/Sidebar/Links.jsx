"use client";

import {Box, Flex, Icon, Text} from "@/components/chakra-client/components";

const Links = () => {

  return (
    <Flex flexDir="column" gap="5">
      <Box>
        <Box mb="6px">
          <Text color="brand.smallText" fontSize="13px">
            PRODUCT MONITORING
          </Text>
        </Box>
        <Box display="flex" flexDir="column">
        </Box>
      </Box>

      <Box>
        <Box mb="6px">
          <Text color="brand.smallText" fontSize="13px">
            SELLER GROWTH
          </Text>
        </Box>
        <Box display="flex" flexDir="column">
        </Box>
      </Box>
    </Flex>
  );
};

export default Links;
