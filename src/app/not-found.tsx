import Logo from "@/components/Logo";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>MQDESK| La page que vous recherchez n&apos;existe pas</title>
        <meta
          name="titre"
          content="MQDESK| La page que vous recherchez n'existe pas"
        />
        <meta
          name="description"
          content="MQDESK| La page que vous recherchez n'existe pas"
        />
      </Head>
      <main className={`flex min-h-screen flex-col relative`}>
        <header
          id="hero"
          className="col-span-12 py-3 md:py-0 flex items-center justify-between w-full container"
        >
          <Logo />
          <Link
            href="/sign-up"
            className="hidden md:block bg-app-blue text-slate-50 text-lg front-bolder py-2 px-6 rounded-full"
          >
            Utiliser RabbitMQ
          </Link>
        </header>
        <section className="w-full text-lg">
          <main className="container mx-auto flex flex-col justify-center py-40 px-2 text-center">
            <h1 className="text-2xl text-center md:text-4xl font-extrabold text-gray-500 w-full py-2 focus:ring-4 focus:ring-gray-200">
              Erreur : Page Non Trouvée
            </h1>
            <p className="pt-3">
              La page que vous recherchez n&apos;existe pas. Vous avez peut-être
              mal saisi l&apos;adresse ou la page a été déplacée.
            </p>
            <p className="pt-3">
              En cliquant sur ce lien vous pouvez
              <Link
                href="/"
                className="text-green-700 border-b border-b-green-700 ml-1"
              >
                retourner à la page d&apos;accueil.
              </Link>
            </p>
          </main>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default NotFound;
