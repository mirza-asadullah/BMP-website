import { motion } from "framer-motion";
import Header from "../components/Header";
import {
  FinanceSection,
  MessageSection,
  MarketplaceSection,
 AppsSection,
  // CommunitySection,
  // AIFinanceSection,
  // MentalHealthSection,
  // MusicSection,
} from "../components/sections";

const M = motion as any;

const bgImage = "/src/assets/bg1.png";
const heroVideo = "/src/assets/anim/animation2.webm";

export default function Home() {
  return (
    <main className="bg-black text-white h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Header />
      {/* <MessageSection /> */}
      {/* <FinanceSection /> */}
{/*     
      <MarketplaceSection /> */}
      
      <AppsSection />
        {/* 
      <CommunitySection />
      <AIFinanceSection />
      <MentalHealthSection />
      <MusicSection /> 
      */}
    </main>
  );
}
