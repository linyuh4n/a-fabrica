import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ModalitiesSection } from "@/sections/ModalitiesSection";
import { GymPlansSection } from "@/sections/GymPlansSection";
import { BjjPlansSection } from "@/sections/BjjPlansSection";
import { DifferentialsSection } from "@/sections/DifferentialsSection";
import { OpeningHoursSection } from "@/sections/OpeningHoursSection";
import { ToolsSection } from "@/sections/ToolsSection";
import { LocationSection } from "@/sections/LocationSection";
import { CTASection } from "@/sections/CTASection";
import { FAQ } from "@/components/FAQ";

export function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ModalitiesSection />
      <GymPlansSection />
      <BjjPlansSection />
      <DifferentialsSection />
      <OpeningHoursSection />
      <ToolsSection />
      <LocationSection />
      <FAQ />
      <CTASection />
    </>
  );
}
