export const BUSINESS = {
  name: "TMG – Taj Mahal Glass",
  shortName: "TMG",
  phone: "+91 8271145798",
  phoneTel: "+918271145798",
  whatsapp: "918271145798",
  whatsappMessage:
    "Hello TMG, I am interested in your services. Please share more details.",
  address: {
    line1: "Ground Floor, Near SBI Bank,",
    line2: "Tilkamanjhi, Bhagalpur, Bihar 812001",
    city: "Bhagalpur",
    state: "Bihar",
    pincode: "812001",
  },
  hours: "Mon – Sat: 9:00 AM – 8:00 PM · Sun: By appointment",
  mapsEmbed:
   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.498287212401!2d87.0028919!3d25.2538181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f0373a2e39db33%3A0x5f7a2838b016d196!2sTaj%20Mahal%20Glass%20-%20UPVC%2C%20Aluminium%2C%20Plywood%2C%20Interior%20Solutions!5e0!3m2!1sen!2sin!4v1781628677066!5m2!1sen!2sin",
  mapsLink:
    "https://www.google.com/maps/place/Taj+Mahal+Glass+-+UPVC,+Aluminium,+Plywood,+Interior+Solutions/@25.2538181,87.0028919,17z/data=!3m1!4b1!4m6!3m5!1s0x39f0373a2e39db33:0x5f7a2838b016d196!8m2!3d25.2538181!4d87.0028919!16s%2Fg%2F11kqrlbp5v?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D",
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
