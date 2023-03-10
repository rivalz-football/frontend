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

interface AvatarMenuProps {
  name: string;
}

const avatarMenu: AvatarMenuProps[] = [
  {
    name: "Settings",
  },
  {
    name: "Referral System",
  },
  {
    name: "Help Center",
  },
  {
    name: "Support",
  },
];

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
        bg="rgb(17, 19, 21)"
        borderColor="#272B30"
        marginRight="10px"
        padding="12px 16px 20px"
        borderRadius="8px"
        zIndex="3"
        overflowY="auto"
        position="relative"
      >
        {avatarMenu.map((menu, index) => (
          <MenuItem
            key={index}
            background="transparent"
            fontSize="15px"
            fontWeight="600"
            color="#90909C"
            _hover={{ background: "transparent", color: "#fff" }}
          >
            {menu.name}
          </MenuItem>
        ))}
        <MenuDivider />
        <MenuItem
          background="transparent"
          fontSize="15px"
          fontWeight="600"
          color="#90909C"
          _hover={{ background: "transparent", color: "#fff" }}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
