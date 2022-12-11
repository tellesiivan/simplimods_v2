import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

interface LeftContentNavigationProps {
  onClickAction: () => void;
  label: string;
}

export const LeftContentNavigation = ({
  onClickAction,
  label,
}: LeftContentNavigationProps) => {
  return (
    <Box
      position="fixed"
      bottom={4}
      right={0}
      left={{
        base: 0,
        md: 36,
      }}
      display="flex"
      width="full"
      justifyContent="center"
    >
      <HStack
        _hover={{
          opacity: 0.85,
        }}
        mx="auto"
        cursor="pointer"
        rounded="full"
        px={5}
        py={2}
        bg="wzy.100"
        border="2px"
        borderColor="primary.900"
        _dark={{
          borderColor: "secondary.400",
        }}
        onClick={onClickAction}
      >
        <Text variant="p1" color="secondary.900">
          {label}
        </Text>
      </HStack>
    </Box>
  );
};

export default LeftContentNavigation;