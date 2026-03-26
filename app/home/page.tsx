import PageContainer from "@/components/layout/PageContainer";
import SectionContainer from "@/components/layout/SectionContainer";

import SearchBar from "@/components/search/SearchBar";
import SuggestionsPanel from "@/components/search/SuggestionsPanel";

import TopicGrid from "@/components/topics/TopicGrid";
import MapPreview from "../../src/components/map/MapPreview";

import GlobalTrendsSection from "@/components/intelligence/GlobalTrendsSection";
import PersonalPathSection from "@/components/intelligence/PersonalPathSection";
import CrossIntelligenceSection from "@/components/intelligence/CrossIntelligenceSection";

import ExternalReferencesSection from "@/components/references/ExternalReferencesSection";

import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <PageContainer>

      <SectionContainer variant="hero">
        <SearchBar />
        <SuggestionsPanel mode="initial" />
      </SectionContainer>

      <SectionContainer>
        <SuggestionsPanel mode="expanded" />
      </SectionContainer>

      <SectionContainer>
        <TopicGrid />
      </SectionContainer>

      <SectionContainer>
        <MapPreview />
      </SectionContainer>

      <SectionContainer>
        <GlobalTrendsSection />
        <PersonalPathSection />
        <CrossIntelligenceSection />
      </SectionContainer>

      <SectionContainer>
        <ExternalReferencesSection />
      </SectionContainer>

      <Footer />

    </PageContainer>
  );
}
