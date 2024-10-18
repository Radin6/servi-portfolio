"use client";

import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar/Navbar";
import { NavbarElement, NavbarLink } from "@/components/Navbar/Navbar";
import ServiLogo from "@/components/ServiLogo/ServiLogo";
import { Button, HStack } from "@/components/chakra-client/components";
import Dropdown, { DropdownElement } from "@/components/Dropdown/Dropdown";
import toast from "react-hot-toast";

const NavbarResponsive = dynamic(() => import("@/components/Navbar/NavbarResponsive"), {
  ssr: false,
});

export function Logo() {

  return (
    <NavbarElement
      alignItems="center"
      display="flex"
      flexBasis={{ md: "0" }}
      flexGrow={{ md: "0.6", lg: "0.8", xl: "1" }}
      height="45px"
      mr={{ base: "4", md: 0 }}
      overflow="hidden"
    >
      <ServiLogo />
    </NavbarElement>
  );
}
export default function HomeLayout({ children }) {

  return (
    <>
      {/* --- This div applies the font to all its children --- */}

      <Navbar logo={<Logo />}>
        <>
          <HStack
            alignItems={{ base: "start", lg: "center" }}
            flexDirection={{ base: "column", md: "row" }}
            spacing="24px"
          >
            <NavbarElement>
              <NavbarLink value="" />
            </NavbarElement>

            <NavbarElement>
              <NavbarLink value="Product" />
            </NavbarElement>

            <NavbarElement>
              <Dropdown
                rightIcon={
                  <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                    keyboard_arrow_down
                  </span>
                }
                value="Solutions"
              >
                <DropdownElement>Safe hiring</DropdownElement>
                <DropdownElement>Global working</DropdownElement>
                <DropdownElement>Buyer success</DropdownElement>
                <DropdownElement>Seller success</DropdownElement>
              </Dropdown>
            </NavbarElement>

            <NavbarElement>
              <NavbarLink value="About us" />
            </NavbarElement>
            <NavbarElement>
              <Dropdown
                rightIcon={">"}
                value="More"
              >
                <DropdownElement>Work with us</DropdownElement>
                <DropdownElement>
                  <NavbarElement>
                    <NavbarLink value="Suggestions" />
                  </NavbarElement>
                </DropdownElement>
                <DropdownElement>Contact us</DropdownElement>
              </Dropdown>
            </NavbarElement>
          </HStack>

          <HStack
            alignItems={{ base: "stretch" }}
            flexBasis="0"
            flexDirection={{ base: "column", md: "row" }}
            flexGrow="1"
            justify={{ base: "center", lg: "end" }}
            spacing="16px"
          >
            <Button variant="outline" onClick={()=>toast("This is a mock page.")}>
              Sign In
            </Button>
            <Button variant="solid" onClick={()=>toast("This is a mock page.")}>
              Get Servi Free
            </Button>
          </HStack>
        </>
      </Navbar>
      <NavbarResponsive logo={<Logo />}>
        <HStack
          alignItems={{ base: "start", lg: "center" }}
          flexDirection={{ base: "column", md: "row" }}
          spacing="24px"
        >
          <NavbarElement>
            <NavbarLink value="" />
          </NavbarElement>

          <NavbarElement>
            <NavbarLink value="Product" />
          </NavbarElement>

          <NavbarElement>
            <Dropdown
              rightIcon={">"}
              value="Solutions"
            >
              <DropdownElement>Safe hiring</DropdownElement>
              <DropdownElement>Global working</DropdownElement>
              <DropdownElement>Buyer success</DropdownElement>
              <DropdownElement>Seller success</DropdownElement>
            </Dropdown>
          </NavbarElement>

          <NavbarElement>
            <NavbarLink value="About us" />
          </NavbarElement>
          <NavbarElement>
            <Dropdown
              rightIcon={
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                  keyboard_arrow_down
                </span>
              }
              value="More"
            >
              <DropdownElement>Work with us</DropdownElement>
              <DropdownElement>
                <NavbarElement>
                  <NavbarLink value="Suggestions" />
                </NavbarElement>
              </DropdownElement>
              <DropdownElement>Contact us</DropdownElement>
            </Dropdown>
          </NavbarElement>
        </HStack>
        <HStack
          alignItems={{ base: "stretch" }}
          flexBasis="0"
          flexDirection={{ base: "column", md: "row" }}
          flexGrow="1"
          justify={{ base: "center", lg: "end" }}
          spacing="16px"
        >
          <Button variant="outline" w="full" onClick={()=>toast("This is a mock page.")}>
            Sign In
          </Button>
          <Button variant="solid" w="full" onClick={()=>toast("This is a mock page.")}>
            Get Servi Free
          </Button>
        </HStack>
      </NavbarResponsive>
      {children}
    </>
  );
}
