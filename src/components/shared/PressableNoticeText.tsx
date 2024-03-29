import { Link, Text, TextProps } from "@chakra-ui/react";
import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

interface PressableNoticeTextProps extends TextProps {
  link: string;
  textContent: string;
}

/**
 *  A pressable text with a link
 * @param Text add any Text styles from chakra ui
 */
export const PressableNoticeText = ({
  link,
  textContent,
  ...props
}: PressableNoticeTextProps) => {
  // TODO: check link is a valid link string

  return (
    <Link as={ReactRouterLink} to={link}>
      <Text
        variant="s2"
        _hover={{
          textDecoration: "underline",
        }}
        {...props}
      >
        {textContent ? textContent : null}
      </Text>
    </Link>
  );
};

export default PressableNoticeText;
