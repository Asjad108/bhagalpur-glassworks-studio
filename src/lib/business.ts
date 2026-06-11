export const BUSINESS = {
  name: "TMG – Taj Mahal Glass",
  shortName: "TMG",
  phone: "+91 8271145798",
  phoneTel: "+918271145798",
  whatsapp: "918271145798",
  whatsappMessage:
    "Hi TMG, I would like a quote for UPVC windows / glass / interiors.",
  address: {
    line1: "Ground Floor, SBI Bank, Narayana Colony",
    line2: "Tilkamanjhi, Bhagalpur, Bihar 812001",
    city: "Bhagalpur",
    state: "Bihar",
    pincode: "812001",
  },
  hours: "Mon – Sat: 9:00 AM – 8:00 PM · Sun: By appointment",
  mapsEmbed:
    "https://www.google.com/maps?q=Tilkamanjhi,Bhagalpur,Bihar+812001&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Tilkamanjhi+Bhagalpur+812001",
};

export const waLink = (msg = BUSINESS.whatsappMessage) =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${BUSINESS.phoneTel}`;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    slug: "upvc-windows",
    title: "UPVC Windows",
    short: "Energy-efficient, weather-sealed UPVC windows custom-made for Bhagalpur homes.",
  },
  {
    slug: "upvc-doors",
    title: "UPVC Doors",
    short: "Durable, termite-proof UPVC doors with multi-point locking.",
  },
  {
    slug: "sliding-windows",
    title: "Sliding Windows",
    short: "Smooth, space-saving sliding window systems in 2, 3 or 4 tracks.",
  },
  {
    slug: "sliding-doors",
    title: "Sliding Doors",
    short: "Large-format sliding doors that flood interiors with natural light.",
  },
  {
    slug: "casement-windows",
    title: "Casement Windows",
    short: "Outward-opening casement windows for premium ventilation and views.",
  },
  {
    slug: "aluminium-partitions",
    title: "Aluminium Partitions",
    short: "Sleek aluminium office and home partitions with glass infills.",
  },
  {
    slug: "glass-doors",
    title: "Glass Doors",
    short: "Frameless and patch-fitting glass doors for showrooms and offices.",
  },
  {
    slug: "glass-partitions",
    title: "Glass Partitions",
    short: "Modern toughened glass partitions for open, premium interiors.",
  },
  {
    slug: "toughened-glass",
    title: "Toughened Glass",
    short: "High-strength toughened glass for railings, doors, façades & tabletops.",
  },
  {
    slug: "shower-enclosures",
    title: "Shower Enclosures",
    short: "Frameless shower enclosures that elevate any bathroom.",
  },
  {
    slug: "acp-cladding",
    title: "ACP Cladding",
    short: "Bold, weatherproof ACP façade cladding for shops & buildings.",
  },
  {
    slug: "steel-railings",
    title: "Steel Railings with Glass",
    short: "Stainless steel railings paired with toughened glass for staircases & balconies.",
  },
  {
    slug: "interior-design",
    title: "Interior Design",
    short: "Turnkey home, office and modular interior design solutions.",
  },
];