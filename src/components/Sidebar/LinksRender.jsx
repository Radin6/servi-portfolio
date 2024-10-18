"use client";
import {useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {useSidebar} from "@/store/useSidebar";
import {Box, Icon, Text} from "@/components/chakra-client/components";

const LinksRender = ({links}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [linkIndex, setLinkIndex] = useState(null);
  const pathName = usePathname();
  const setShowSidebar = useSidebar((state) => state.setShowSidebar);
  const isDesktop = useSidebar((state) => state.isDesktop);

  const applyHover = (index) => {
    setLinkIndex(index);
    setIsHovered(true);
  };

  const handleClick = () => {
    !isDesktop && setShowSidebar(false);
  };

  return (
    <>
      {links.map((item, index) => (
        <Box
          key={item.name}
          _hover={{bg: "#10141C"}}
          bg={`${pathName === item?.url ? "#212835" : ""}`}
          rounded="4px"
          onMouseEnter={() => applyHover(index)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link href={item.url ? item.url : "/buyer"} prefetch={false} onClick={handleClick}>
            <Box
              color={`${
                pathName === item?.url
                  ? "#E3E7EF"
                  : isHovered && linkIndex === index
                  ? "brand.mainText"
                  : "brand.secondaryText"
              }`}
              display="flex"
              gap="8px"
              px="6px"
              py="8px"
            >
              <Icon as={item.icon} h={5} w={5} />
              <Text fontSize="14px">{item.name}</Text>
            </Box>
          </Link>
        </Box>
      ))}
    </>
  );
};

export default LinksRender;
