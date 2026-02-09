"use client";

import {  MessageSection, FinanceSection, MarketplaceSection, AppsSection, CommunitySection, AIFinanceSection, MentalHealthSection, MusicSection } from "../components/sections";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Welcome should appear first and occupy full viewport */}


      {/* Other sections follow — they can be switched later by the SectionsViewer */}
      <section id="sections-list" className="max-w-7xl mx-auto py-12">
        <MessageSection />
        <FinanceSection />
        <MarketplaceSection />
        <AppsSection />
        <CommunitySection />
        <AIFinanceSection />
        <MentalHealthSection />
        <MusicSection />
      </section>
    </main>
  );
}
