import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Stay in Meghalaya`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | Stay in Meghalaya`,
    description: site.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=82",
      },
    ],
  },
  verification: {
    google: "CrMYoTHG4XiaQx_s3E8ROw-PlpGxd3UWTk-Qjl2d5cc",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
