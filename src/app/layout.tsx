"use client";

import { Analytics } from "@/components/Analytics";
import { ApplicationContext } from "./(user)/ApplicationContext";
import { pjs } from "./fonts";
import "./globals.css";
import useLayout from "./(user)/useLayout";
import ApplicationProvider from "./ApplicationProvider";

const default_description =
  "Notre solution rabbitmq hébergé vous permet d'optimiser la communication au sein de vos projets. MQ-DESK offre une plateforme robuste et fiable pour la gestion des messages et une communication efficace entre les composants de votre application.";

const default_title = "MQ Desk: rabbitmq hébergé pour vos applications";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, setData } = useLayout();

  return (
    <html lang="fr">
      <ApplicationProvider>
        <ApplicationContext.Provider value={{ data, setData }}>
          <head>
            <title>{data.metaData.title || default_title}</title>
            <meta
              name="description"
              content={data.metaData.description || default_description}
            />
          </head>
          <body className={`${pjs.className} scroll-smooth  font-sans`}>
            {children}
          </body>
          {process.env.NEXT_PUBLIC_ANALYTICS_KEY && (
            <Analytics ga_id={process.env.NEXT_PUBLIC_ANALYTICS_KEY} />
          )}
        </ApplicationContext.Provider>
      </ApplicationProvider>
    </html>
  );
}
