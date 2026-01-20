export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  specs?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Earbuds Pro",
    price: 179,
    image: "/products/earbuds.jpg",
    category: "Audio",
    description:
      "Premium wireless earbuds with active noise cancellation. 30-hour battery life with charging case.",
    specs: [
      "Active Noise Cancellation",
      "30hr Battery",
      "IPX4 Water Resistant",
    ],
  },
  {
    id: "2",
    name: "Mechanical Keyboard",
    price: 149,
    image: "/products/keyboard.jpg",
    category: "Peripherals",
    description:
      "Compact 75% mechanical keyboard with hot-swappable switches. Wireless and wired connectivity.",
    specs: ["Hot-swappable Switches", "Wireless/Wired", "RGB Backlit"],
  },
  {
    id: "3",
    name: "USB-C Hub Pro",
    price: 89,
    image: "/products/hub.jpg",
    category: "Accessories",
    description:
      "7-in-1 USB-C hub with 4K HDMI, SD card reader, and 100W power delivery.",
    specs: ["4K HDMI Output", "100W Power Delivery", "SD/microSD Slots"],
  },
  {
    id: "4",
    name: "Portable SSD 1TB",
    price: 129,
    image: "/products/ssd.jpg",
    category: "Storage",
    description:
      "Ultra-fast portable SSD with 1050MB/s read speeds. Compact aluminum design.",
    specs: ["1TB Capacity", "1050MB/s Read", "USB-C 3.2"],
  },
  {
    id: "5",
    name: "Wireless Charging Pad",
    price: 49,
    image: "/products/charger.jpg",
    category: "Accessories",
    description:
      "Minimalist wireless charging pad with 15W fast charging. Compatible with all Qi devices.",
    specs: ["15W Fast Charging", "Qi Compatible", "LED Indicator"],
  },
  {
    id: "6",
    name: "Studio Monitor Headphones",
    price: 249,
    image: "/products/headphones.jpg",
    category: "Audio",
    description:
      "Professional-grade studio monitor headphones with flat frequency response.",
    specs: ["40mm Drivers", "Flat Response", "Detachable Cable"],
  },
  {
    id: "7",
    name: "Ergonomic Mouse",
    price: 79,
    image: "/products/mouse.jpg",
    category: "Peripherals",
    description:
      "Vertical ergonomic mouse designed for all-day comfort. Dual wireless connectivity.",
    specs: ["Ergonomic Design", "Bluetooth/2.4GHz", "4000 DPI"],
  },
  {
    id: "8",
    name: "Laptop Stand",
    price: 69,
    image: "/products/stand.jpg",
    category: "Accessories",
    description:
      "Adjustable aluminum laptop stand with cable management. Fits laptops up to 17 inches.",
    specs: ["Adjustable Height", "Aluminum Build", 'Up to 17"'],
  },
];

export const categories = [
  "ALL",
  "AUDIO",
  "PERIPHERALS",
  "ACCESSORIES",
  "STORAGE",
];
