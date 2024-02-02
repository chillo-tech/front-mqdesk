"use client";
import AvisRecus from "@/components/avis-recus";
import Clients from "@/components/clients";
import CommentCaMarche from "@/components/comment-ca-marche";
import CoursYoutube from "@/components/cours-youtube";
import { FloatingFooter } from "@/components/floating-footer";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Offre from "@/components/offre";
import Support from "@/components/support";
import Tarifs from "@/components/tarifs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative ">
      <Header />
      <Hero />
      <Clients classes="bg-white" />
      <Offre />
      <CommentCaMarche />
      <AvisRecus />
      <Tarifs />
      <Support />
      <CoursYoutube />
      {/*<Faq /> */}
      <Footer />
      <FloatingFooter />
    </main>
  );
}
/*
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <Header />
      <Hero />
      <Clients classes="text-app-blue bg-white"/>
      <Footer />
    
    </main>
  );
}
*/
