import {
  Avatar,
  Box,
  DrawerCloseButton,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  StatDownArrow,
} from "@chakra-ui/react";
import { DownArrowIcon } from "assets/icons";

export const Header = () => {
  return (
    <Box>
      {" "}
      <Menu>
        <MenuButton
          transition="all 0.3s"
          _focus={{ boxShadow: "none" }}
          // background="rgba(11, 11, 11, 0.4)"
          // border="1px solid rgba(245, 245, 245, 0.05)"
          // boxShadow="0px 4px 4px rgba(0, 0, 0, 0.35)"
          borderRadius="6px"
          padding="10px 20px"
        >
          <HStack>
            <Avatar height="45px" width="45px" borderRadius="4px" />
            <DownArrowIcon />
          </HStack>
        </MenuButton>
        <MenuList
          bg="rgba(11, 11, 11, 1)"
          borderColor="#272B30"
          padding="12px 16px 20px"
          borderRadius="6px"
        >
          <MenuDivider />
          <MenuItem background="transparent" fontSize="15px" fontWeight="600">
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
