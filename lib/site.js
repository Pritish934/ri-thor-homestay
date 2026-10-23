export const site = {
  name: "Ri Thor Homestay",
  shortName: "Ri Thor",
  tagline: "A peaceful stay in the heart of Meghalaya.",
  description:
    "Stay at Ri Thor Homestay and experience a comfortable, relaxed base for exploring Meghalaya. Check rooms, amenities, local guides and availability.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "91XXXXXXXXXX",
  maps:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ||
    "https://maps.app.goo.gl/sVtRqTrqiiG4u5JfA",
  email: "hello@example.com",
  phone: "+91 XXXXX XXXXX",
  address: "Meghalaya, India",
};

export const whatsappUrl = (
  message = "Hi, I'm interested in staying at Ri Thor Homestay. I'd like to check availability and price.",
) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Journal", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const rooms = [
  {
    slug: "the-comfort-room",
    name: "The Comfort Room",
    short: "A warm, restful room for couples or solo travellers.",
    description:
      "A thoughtfully arranged room designed for slow mornings, comfortable nights and easy access to the best of Meghalaya.",
    guests: 2,
    price: "Enquire for price",
    image: "/images/bedroom.jpeg",
    amenities: [
      "2 Rooms With One Bed",
      "Queen bed",
      "Private bathroom",
      "Hot water",
      "Wi-Fi",
    ],
  },
  {
    slug: "the-family-room",
    name: "Double Bed Rooms With Sharing Bathrooms",
    short: "More space for small families and friends travelling together.",
    description:
      "A spacious option for guests who want room to settle in after a day of exploring waterfalls, viewpoints and local villages.",
    guests: 4,
    price: "Enquire for price",
    image: "/images/doublebed.jpeg",
    amenities: [
      "2 Rooms With Two Beds",
      "Flexible sleeping",
      "Sharing bathroom",
      "Hot water",
      "Wi-Fi",
    ],
  },
  {
    slug: "the-kitchen-room",
    name: "The Kitchen Room",
    short:
      "A beautifully arranged room with a small kitchen for self-catering.",
    description:
      "A thoughtfully arranged kitchen room designed for guests who want to prepare their own meals while enjoying the comforts of a homestay.",
    guests: 4,
    price: "Enquire for price",
    image: "/images/kitchen.jpeg",
  },
];

export const faqs = [
  {
    question: "How can I check room availability?",
    answer:
      "Send your check-in date, check-out date and number of guests on WhatsApp. The property team can confirm availability and the current rate.",
  },
  {
    question: "Can I contact the homestay on WhatsApp?",
    answer:
      "Yes. Use the WhatsApp buttons throughout the website to send an enquiry directly to the property.",
  },
  {
    question: "Is the homestay suitable for families?",
    answer:
      "Yes. The website includes a family-room option. Confirm the current occupancy and sleeping arrangement with the property before booking.",
  },
  {
    question: "What should I do before arriving?",
    answer:
      "Confirm your dates, guest count, arrival time, directions and any special requirements with the property team before travelling.",
  },
];

export const blogPosts = [
  {
    slug: "a-slow-weekend-in-meghalaya",
    title: "A Slow Weekend in Meghalaya: How to Plan Without Rushing",
    excerpt:
      "A practical way to experience Meghalaya when you want fewer checklists, more local time and a calmer trip.",
    date: "2026-10-01",
    category: "Travel Guide",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=82",
    content: [
      "Meghalaya rewards travellers who leave some space in the itinerary. Instead of trying to cross every attraction off a list, choose a comfortable base and give yourself time to enjoy the landscape.",
      "Start with one major outing each day. Leave room for an unplanned viewpoint, a local meal or a slow afternoon back at your stay.",
      "Before travelling, check road conditions, weather and realistic driving times. Distances that look short on a map can take longer on hill roads.",
      "The best itinerary is usually the one that leaves you with enough energy to enjoy the place rather than spending the whole trip moving between locations.",
    ],
  },
  {
    slug: "what-to-pack-for-meghalaya",
    title: "What to Pack for a Meghalaya Trip",
    excerpt:
      "A practical packing list for changing weather, comfortable sightseeing and long days outdoors.",
    date: "2026-09-24",
    category: "Travel Tips",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1600&q=82",
    content: [
      "Pack layers rather than relying on one heavy jacket. Meghalaya weather can change quickly, and a light waterproof layer is useful on outdoor days.",
      "Comfortable shoes matter more than fashionable ones if your plans include viewpoints, trails or uneven paths.",
      "Keep a small day bag with water, a power bank, basic medicines, a rain layer and a dry pouch for electronics.",
      "Finally, check the forecast shortly before departure and adjust what you carry instead of following a fixed packing list blindly.",
    ],
  },
  {
    slug: "planning-your-first-meghalaya-trip",
    title: "Planning Your First Meghalaya Trip: A Simple Starting Point",
    excerpt:
      "Where to begin when you have never visited Meghalaya and don't want an overcomplicated itinerary.",
    date: "2026-09-15",
    category: "Planning",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=82",
    content: [
      "The easiest way to plan a first Meghalaya trip is to choose your priorities before choosing your route. Decide whether you care most about waterfalls, landscapes, food, villages, hiking or simply slowing down.",
      "Then choose a small number of areas that work together geographically. This avoids spending most of your holiday on the road.",
      "Book accommodation with your actual travel pace in mind. A comfortable base can make a short trip feel much less hectic.",
      "Keep one flexible day if possible. It gives you room to respond to weather and local recommendations once you arrive.",
    ],
  },
];

export const getRoom = (slug) => rooms.find((room) => room.slug === slug);
export const getPost = (slug) => blogPosts.find((post) => post.slug === slug);
