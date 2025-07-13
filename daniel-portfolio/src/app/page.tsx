import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Projects from "./components/Projects";
import Navbar  from "./components/Navbar";


export default function Home() {
  return (
    <main>
      <Hero />
      <Navbar />
      <Projects />
      <Blogs />
      <Newsletter />
    </main>
  );
} 