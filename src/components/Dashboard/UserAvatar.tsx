import {
  Avatar,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { DownArrowIcon } from "assets/icons";

type UserAvatarProps = {
  avatar: string;
};

export const UserAvatar = (props: UserAvatarProps) => {
  const { avatar } = props;

  return (
    <Menu>
      <MenuButton
        transition="all 0.3s"
        _focus={{ boxShadow: "none" }}
        borderRadius="6px"
        padding="10px 0"
        marginLeft="5px"
      >
        <HStack>
          <Avatar height="45px" width="45px" borderRadius="4px" src={avatar} />
          <DownArrowIcon />
        </HStack>
      </MenuButton>
      <MenuList
        zIndex="3"
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
  );
};
