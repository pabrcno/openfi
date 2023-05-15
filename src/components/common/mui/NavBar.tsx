import { useRouter } from "next/router";
import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  IconButton,
  Box,
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
  styled,
  Link as MuiLink,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { LinkItem } from "@/types/LinkItem";
import Image from "next/image";

type Props = {
  linkItems: LinkItem[];
};

const CustomLink = styled(MuiLink)(({ theme }) => ({
  color: "inherit",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
  "&.active": {
    color: theme.palette.primary.main,
  },
}));

const Logo = () => (
  <MuiLink component={Link} href="/">
    <Image src="/path/to/your/logo.png" alt="App logo" width={40} height={40} />
  </MuiLink>
);

export const NavBar: React.FC<Props> = ({ linkItems }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpen(isOpen);
    };

  const list = () => (
    <List>
      {linkItems.map((item, index) => (
        <ListItem key={index}>
          <MuiLink
            component={Link}
            href={item.path}
            sx={{ color: router.pathname === item.path ? "primary" : "" }}
          >
            {item.text}
          </MuiLink>
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Logo />
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
              <Box
                display="flex"
                flexDirection="row"
                height={60}
                alignItems="center"
              >
                <Logo />
              </Box>
              {list()}
            </Drawer>
          </>
        ) : (
          <Box display="flex" flexDirection="row">
            {linkItems.map((item, index) => (
              <Box key={index + "-nav-desktop-link"} mr={2}>
                <MuiLink
                  component={Link}
                  href={item.path}
                  sx={(theme) => ({
                    color:
                      router.pathname === item.path
                        ? theme.palette.action.active
                        : "inherit",
                  })}
                >
                  {item.text}
                </MuiLink>
              </Box>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
