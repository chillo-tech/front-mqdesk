"use client";

import { ApplicationContext } from "./(user)/ApplicationContext";
import useLayout from "./(user)/useLayout";
import ApplicationProvider from "./ApplicationProvider";
import { pjs } from "./fonts";
import "./globals.css";

const default_description =
  "Optimisez les performances de vos applications avec MQ Desk, la solution d'hébergement RabbitMQ de pointe. Notre service offre une plateforme robuste et fiable pour la gestion des messages, garantissant une communication efficace entre les composants de votre application. Avec une infrastructure hautement disponible, MQ Desk assure une intégration transparente de RabbitMQ, libérant ainsi votre équipe de développement des préoccupations liées à l'infrastructure";

const default_title = "MQ Desk: rabbitmq hébergé pour vos applications";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, setData } = useLayout();

  return (
    <html lang="en">
      <ApplicationProvider>
        <ApplicationContext.Provider value={{ data, setData }}>
          <head>
            <title>{data.metaData.title || default_title}</title>
            <meta
              name="description"
              content={data.metaData.description || default_description}
            />
          </head>
          <body
            className={`${pjs.className} scroll-smooth  font-sans`}
            onScroll={e => console.log('scroll')}
          >
            {children}
          </body>
        </ApplicationContext.Provider>
      </ApplicationProvider>
    </html>
  );
}
