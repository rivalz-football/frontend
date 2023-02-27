import {
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { ComponentType } from "react";

type NotificationProps = {
  icon: ComponentType;
  count: number;
  countColor: string;
};

export const Notification = (props: NotificationProps) => {
  const { icon, count, countColor } = props;

  const Icon = icon;

  return (
    <Menu>
      <MenuButton
        py={2}
        transition="all 0.3s"
        _focus={{ boxShadow: "none" }}
        position="relative"
        as={IconButton}
        size="lg"
        variant="ghost"
        aria-label="open menu"
        icon={<Icon />}
        background="rgba(217, 217, 217, 0.01)"
        border="1px solid rgba(255, 255, 255, 0.02)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.35)"
        borderRadius="50%"
        padding="15px 10px"
        _after={{
          content: `"${count}"`,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          top: "-8px",
          right: "-8px",
          width: "25px",
          height: "25px",
          fontSize: "13px",
          fontWeight: "700",
          borderRadius: "50%",
          background: countColor,
          border: "3px solid #0F0E11",
          padding: "2px",
        }}
      >
        {/* <HStack
      background="#222222"
      border="1px solid rgba(173, 170, 178, 0.2)"
      boxShadow="inset 0px 4px 4px rgba(0, 0, 0, 0.2);"
      padding="12px"
      borderRadius="4px"
      position="relative"
    >
      <NotificationIcon />
    </HStack> */}
      </MenuButton>
      <MenuList
        bg="#111315"
        borderColor="#272B30"
        padding="12px 16px 20px"
        borderRadius="8px"
        zIndex="3"
        minH="300px"
        maxH="500px"
        w={{
          base: "100vw",
          md: "500px",
        }}
        overflowY="auto"
        position="relative"
      ></MenuList>
    </Menu>
  );
};
