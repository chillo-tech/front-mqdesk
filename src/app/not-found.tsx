import Footer from "@/components/footer";
import Header from "@/components/header";

const NotFound = () => {
  return (
    <main className={`flex min-h-screen flex-col relative`}>
      <Header />
      <div>
        <p>Not found</p>
      </div>
      <Footer />
    </main>
  );
};

export default NotFound;
