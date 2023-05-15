import { ReactNode } from "react";
import { Container } from "@mui/material";
import { NavBar } from "./NavBar"; // Assuming NavBar is in the same directory
import { LinkItem } from "@/types/LinkItem";

type Props = {
  children: ReactNode;
  linkItems: LinkItem[];
};

const Layout: React.FC<Props> = ({ children, linkItems }) => {
  return (
    <>
      <NavBar linkItems={linkItems} />
      <Container
        sx={{
          pt: 2,
        }}
      >
        {children}
      </Container>
    </>
  );
};

export default Layout;
