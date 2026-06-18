import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Shelves from "@/components/Shelves";
import Counter from "@/components/Counter";
import Proof from "@/components/Proof";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Shelves />
        <Counter />
        <Proof />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
