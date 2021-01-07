export const headerTabConfig = [
  { label: "Home", path: "/" },
  {
    label: "Services",
    path: "/services",
    menu: [
      { label: "Services", path: "/services" },
      { label: "Custom Software Development", path: "/customsoftware" },
      { label: "Mobile App Development", path: "/mobileapps" },
      { label: "Website Development", path: "/websites" },
    ],
  },

  { label: "The Revolution", path: "/revolution" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

export const tabLinkMap = headerTabConfig.reduce(
  (acc, cur) =>
    cur.menu
      ? acc.concat([cur.menu.map((item) => item.path)])
      : acc.concat(cur.path),
  []
);
