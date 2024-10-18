import React, { useCallback, useState } from "react";
import {
  Avatar,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IconUserSquareRounded } from "@tabler/icons-react";

import { Button } from "@/components/chakra-client/components";

const pathRegExp = new RegExp("buyer");

export const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const MainMenuOptions = useCallback(
    () => [
      {
        icon: IconUserSquareRounded,
        text: "View Profile",
        onClick: () => {
          push(`/seller/profile/${userId}`);
          setIsOpen(false);
        },
      },
      {
        icon: IoSettingsOutline,
        text: "Account Settings",
        onClick: () => {
          push(`/buyer/settings`);
          setIsOpen(false);
        },
      },
      {
        icon: IoLogOutOutline,
        text: "Log Out",
        onClick: async () => {
          await postLogOutUser();
          await state.updateUser(null, null);
          setIsOpen(false);
          replace("/");
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps

  );
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  const onChangeSwitch = () => {
    setIsOpen(false);
    if (!pathRegExp.test(pathname)) {
      push("/buyer");
    } else {
      push("/seller");
    }
  };
  const checkSwitchText = () => {
    return "Buying or Selling";
  };

  return (
    <HStack
      alignItems="center"
      flexDirection="row"
      ml={{ md: "1.5rem" }}
      spacing={{ base: "14px", md: "24px" }}
    >
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent backgroundColor="brand.secondary" style={{ width: "223px" }}>
          <DrawerCloseButton color="white" />
          <DrawerHeader px="16px">
            <HStack alignItems={{ base: "center" }} gap="8px">
              <Stack spacing={1}>
                <Text color="#FFFFFF99" fontSize="sm" lineHeight={1}>
                  myname
                </Text>

                <Text color="#FFFFFF99" fontSize="xs" lineHeight={1}>
                  @username
                </Text>
              </Stack>
            </HStack>
          </DrawerHeader>

          <DrawerBody px="16px">
            <Button
              letterSpacing="wide"
              mb="1.5rem"
              mt=".3rem"
              variant={`${checkSwitchText() === "Buying" ? "solid" : "solid-green"}`}
              w="full"
              onClick={onChangeSwitch}
            >
              {`Switch to Buyer`}
            </Button>
            <Divider />
          </DrawerBody>
          <Divider />
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};
