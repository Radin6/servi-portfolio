const Card = {
  variants: {
    "outline-blue": {
      container: {
        bg: "card.bg.dark-blue",
        borderColor: "border.card-light",
        borderWidth: ".5px",
        boxShadow: "base",
      },
    },
    "outline-transparent": {
      container: {
        bg: "transparent",
        borderColor: "none",
        boxShadow: "none",
      },
    },
  },
};

export default Card;
