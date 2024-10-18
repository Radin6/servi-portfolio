const Link = {
  variants: {
    Navbar: {
      textDecoration: "none",
      _hover: {color: "white", textDecoration: "none"},
      color: "gray",
      _active: {color: "white"},
    },
    NavbarActive: {
      textDecoration: "none",
      _hover: {color: "white", textDecoration: "none"},
      color: "white",
      _active: {color: "white"},
    },
  },
};

export default Link;
