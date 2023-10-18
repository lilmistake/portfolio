import { FooterSection } from "./sections/FooterSection"
import { HeroSection } from "./sections/HeroSection"
import { MeSection } from "./sections/MeSection"

function App() {
  return (
    <section>
      <HeroSection />
      <div className="bg-black sm:p-10 p-2">
        <img src="https://holopin.me/lilmistake" className="max-w-6xl mx-auto w-full"></img>
      </div>
      <MeSection />
      <FooterSection />
      <div className="bg-black w-full p-5 text-white text-center">
        Made with React, Tailwind CSS, Vite, and ❤️.
      </div>

    </section>
  )
}

export default App  
