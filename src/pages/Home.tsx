import { motion } from "framer-motion";
import Header from "../components/Header";
import {
  FinanceSection,
  MessageSection,
  MarketplaceSection,
  AppsSection,
  CommunitySection,
  NuricionSection,
  AIFinanceSection,
  MentalHealthSection,
  MusicSection,
} from "../components/sections";
import MessageSubsection from "../components/sunSections/MessageSubsection";


export default function Home() {
  return (
    <main className="bg-black text-white h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Header />
      {/* <MessageSection /> */}
      <FinanceSection />
      {/*     
      <MarketplaceSection /> */}
      {/* <MessageSubsection/> */}
      {/* <AppsSection /> */}

      {/* <CommunitySection /> */}

      {/* <AIFinanceSection /> */}
      {/* <NuricionSection /> */}
      {/* <MentalHealthSection /> */}

      {/* <MusicSection />  */}

    </main>
  );
}
