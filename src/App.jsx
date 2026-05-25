import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { BackToTop } from './components/ui/BackToTop'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { ExpertiseSection } from './components/sections/ExpertiseSection'
import { AwardsSection } from './components/sections/AwardsSection'
import { MCSection } from './components/sections/MCSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { HobbiesSection } from './components/sections/HobbiesSection'
import { ContactSection } from './components/sections/ContactSection'

export default function App() {
  return (
    <div className="grain">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <AwardsSection />
        <MCSection />
        <ExperienceSection />
        <HobbiesSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
