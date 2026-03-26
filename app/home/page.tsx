import PageContainer from "@/components/common/layout/PageContainer";
import SectionContainer from "@/components/common/layout/SectionContainer";

import SearchBar from "@/components/common/search/SearchBar";
import SuggestionsPanel from "@/components/common/search/SuggestionsPanel";

import TopicGrid from "@/components/common/topics/TopicGrid";
import MapPreview from "@/components/common/map/MapPreview";

import GlobalTrendsSection from "@/components/common/intelligence/GlobalTrendsSection";
import PersonalPathSection from "@/components/common/intelligence/PersonalPathSection";
import CrossIntelligenceSection from "@/components/common/intelligence/CrossIntelligenceSection";

import ExternalReferencesSection from "@/components/common/references/ExternalReferencesSection";

import Footer from "@/components/common/layout/Footer";

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
