import Hero from "./components/hero";
import Collection from "./collection/page";
import Contact from "./contact/page";

export default function Page() {
  return (
    <main>
      <Hero />
      <Collection />
      <Contact />
    </main>
  );
}