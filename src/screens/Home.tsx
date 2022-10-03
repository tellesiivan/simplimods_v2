import { useState } from "react";
import LoginForm from "../auth/LoginForm";
import { default as SignUpForm } from "../auth/SignUpForm";
import { IsMobileView } from "../utils/index";

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  HStack,
  Image,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

enum ActiveStates {
  LOGIN = "Login",
  SIGNUP = "Sign up",
}

type FormOpt = {
  label: ActiveStates;
};

const formOpts: FormOpt[] = [
  { label: ActiveStates.LOGIN },
  { label: ActiveStates.SIGNUP },
];

const Home = () => {
  const isMobile = IsMobileView();
  const alignVstack = useBreakpointValue(
    { md: "center", lg: "start" },
    { ssr: false }
  );
  const [activeForm, setActiveForm] = useState<ActiveStates>(
    ActiveStates.LOGIN
  );

  return isMobile ? (
    <VStack height="full" width="full" spacing={0} bg="primary.600"></VStack>
  ) : (
    <HStack height="full" width="full" spacing={0} bg="primary.600">
      <Box className="relative w-6/12 h-full ">
        <Image
          src="https://images.unsplash.com/photo-1660544287010-3310dd69e12f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          alt="Home page, "
          className="absolute inset-0 object-cover object-center w-full h-full"
        />
      </Box>
      <Flex
        height="full"
        flex={1}
        justifyContent="center"
        alignItems="center"
        padding={3}
      >
        <VStack align={alignVstack}>
          <Box mb={12}>
            <Heading as="h2" size="3xl" color="white">
              Happening now.
            </Heading>
          </Box>

          <VStack align={alignVstack} spacing={1}>
            <ButtonGroup
              _hover={{ backgroundColor: "none" }}
              variant="unstyled"
              color="white"
            >
              {formOpts.map((opt) => (
                <Button
                  key={opt.label}
                  onClick={() => setActiveForm(opt.label)}
                  as="h1"
                  fontSize="md"
                  color={`${opt.label === activeForm ? "razz.500" : "white"}`}
                  className="cursor-pointer"
                >
                  {opt.label}
                </Button>
              ))}
            </ButtonGroup>
            <Box
              bg="primary.400"
              p={6}
              rounded="xl"
              minWidth="96"
              maxWidth={96}
            >
              {activeForm === ActiveStates.LOGIN ? (
                <LoginForm />
              ) : (
                <SignUpForm />
              )}
            </Box>
          </VStack>
        </VStack>
      </Flex>
    </HStack>
  );
};

export default Home;
