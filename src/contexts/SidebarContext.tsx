import { SIDEBAR_WIDTH_FULL, SIDEBAR_WIDTH_SMALL } from "assets/data";
import { createContext, PropsWithChildren, useContext, useState } from "react";

interface SidebarToggleContextData {
  menuWidth: string;
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const SidebarContext = createContext<SidebarToggleContextData>(
  {} as SidebarToggleContextData
);

export const SidebarToggle = (props: PropsWithChildren) => {
  const { children } = props;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [menuWidth, setMenuWidth] = useState(SIDEBAR_WIDTH_SMALL);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
    setMenuWidth(isSidebarOpen ? SIDEBAR_WIDTH_SMALL : SIDEBAR_WIDTH_FULL);
  };

  return (
    <SidebarContext.Provider
      value={{
        menuWidth,
        toggleSidebar,
        isSidebarOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
