"use client";
import {useState, useEffect} from "react";
import {usePathname} from "next/navigation";

import {productMonitoringLinks, sellerGrowthLinks, analyticsLinks} from "./linksArrays";
import LinksRender from "./LinksRender";

import {Box, Flex, Icon, Text} from "@/components/chakra-client/components";

const Links = () => {
  const [isSeller, setIsSeller] = useState(null);

  const pathName = usePathname();
  const pathRegExp = new RegExp("seller");

  useEffect(() => {
    setIsSeller(pathRegExp.test(pathName));
  }, [pathName]);

  const excludedLinks = ["Posts", "ServiAds"];
  const filterLinks = (links) => {
    if (!isSeller) {
      const buyerLinks = links.filter((link) => !excludedLinks.includes(link.name));

      return buyerLinks;
    }

    return links;
  };

  return (
    <Flex flexDir="column" gap="5">
      <Box>
        <Box mb="6px">
          <Text color="brand.smallText" fontSize="13px">
            PRODUCT MONITORING
          </Text>
        </Box>
        <Box display="flex" flexDir="column">
          <LinksRender links={filterLinks(productMonitoringLinks)} />
        </Box>
      </Box>

      <Box>
        <Box mb="6px">
          <Text color="brand.smallText" fontSize="13px">
            SELLER GROWTH
          </Text>
        </Box>
        <Box display="flex" flexDir="column">
          <LinksRender links={filterLinks(sellerGrowthLinks)} />
        </Box>
      </Box>

      {isSeller && (
        <Box>
          <Box mb="6px">
            <Text color="brand.smallText" fontSize="13px">
              ANALYTICS
            </Text>
          </Box>
          <Box display="flex" flexDir="column">
            <LinksRender links={analyticsLinks} />
          </Box>
        </Box>
      )}
    </Flex>
  );
};

export default Links;
