'use client';

import toast, { Toaster } from 'react-hot-toast';

import TextAnimated from "@/components/TextAnimated";
import { Button, Text, Container, Box, Center } from "@/components/chakra-client/components";

export default function HomePage() {
  return (
    <Box
      alignItems="center"
      as="main"
      background="bg.purple"
      backgroundImage="linear-gradient(#292b2f4f .09em, transparent .09em), linear-gradient(90deg, #292b2f4f .09em, transparent .1em)"
      backgroundSize="4.75em 4.75em"
      h="100vh"
    >
      <Toaster />
      <Center as="main" h="100%">
        <Container alignItems="center" as="section" textAlign="center">
          <Text textStyle="HeroText.gradient">Hire</Text>
          <TextAnimated
            data={[
              "Marketing",
              "Design",
              "SEO",
              "Construction",
              "Social Media",
              "Software",
              "Healthcare",
              "Finance",
              "E-commerce",
            ]}
            textStyle="100% width"
          />
          <Text textStyle="HeroText.gradientYellow">Specialists at Servi</Text>
          <Text textStyle="HeroText.description">A free and safe services exchange platform.</Text>
          <Text textStyle="HeroText.description">
            Suitable for freelancers, teams, or even companies!
          </Text>
          <Button mt={8} variant="solid" onClick={() => toast('This is a mock page')}>
            {`Get started - it's free!`}
          </Button>
          <Box border='1px' borderColor="red" marginTop={7}>
            <Text textColor={"red"} >This is a mockup for Servi (version 1). The project is currently in a private repository due to proprietary
              content, ongoing development, and security considerations.
            </Text>
          </Box>
        </Container>
      </Center>
    </Box>
  );
}
