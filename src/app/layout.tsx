import type { Metadata } from "next";
import "./globals.css";
import { pjs } from "./fonts";

export const metadata: Metadata = {
  title: "MQ Desk: rabbitmq hébergé pour vos applications",
  description: "Optimisez les performances de vos applications avec MQ Desk, la solution d'hébergement RabbitMQ de pointe. Notre service offre une plateforme robuste et fiable pour la gestion des messages, garantissant une communication efficace entre les composants de votre application. Avec une infrastructure hautement disponible, MQ Desk assure une intégration transparente de RabbitMQ, libérant ainsi votre équipe de développement des préoccupations liées à l'infrastructure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pjs.className} font-sans`}>{children}</body>
    </html>
  );
}
