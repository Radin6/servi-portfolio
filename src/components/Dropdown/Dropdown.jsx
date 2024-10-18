"use client";
import {Menu, MenuButton, MenuList, MenuItem, Button} from "@chakra-ui/react";
export function DropdownElement(props) {
  return (
    <MenuItem
      _hover={{color: "brand.mainText"}}
      backgroundColor="transparent"
      color="brand.secondaryText"
      padding="8px"
      transition=".15s ease"
      {...props}
    >
      {props.children}
    </MenuItem>
  );
}
export default function Dropdown({value, children, ...props}) {
  return (
    <Menu>
      <MenuButton
        _active={{color: "white", backgroundColor: "transparent"}}
        _hover={{color: "white", backgroundColor: "transparent"}}
        as={Button}
        backgroundColor="transparent"
        color="gray"
        fontSize="xs"
        height="fit-content"
        padding="0"
        position="relative"
        {...props}
      >
        {value}
      </MenuButton>

      <MenuList
        backgroundColor="purple.black"
        borderColor="gray.soft"
        borderStyle="solid"
        borderWidth="1px"
        boxShadow=""
        padding="16px 16px"
        position="relative"
        zIndex="100000"
      >
        {children}
      </MenuList>
    </Menu>
  );
}
