import { ReactNode } from "react";
import { Box, Container } from "@mui/material";
import { NavBar } from "./NavBar"; // Assuming NavBar is in the same directory
import { LinkItem } from "@/types/LinkItem";

type Props = {
  children: ReactNode;
  linkItems: LinkItem[];
};

const Layout: React.FC<Props> = ({ children, linkItems }) => {
  return (
    <Box>
      <NavBar linkItems={linkItems} />
      <Box
        sx={(theme) => ({
          pt: 2,
          backgroundColor: theme.palette.background.default,
          minHeight: "100vh",
        })}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
