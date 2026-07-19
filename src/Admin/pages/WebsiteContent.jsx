// src/admin/pages/WebsiteContent.jsx
import { useState } from "react";

import ContentTabs from "../components/website-content/ContentTabs";
import HeroSection from "../components/website-content/HeroSection";
import AboutSection from "../components/website-content/AboutSection";
import ContactSection from "../components/website-content/ContactSection";
import SocialLinksSection from "../components/website-content/SocialLinksSection";

import { websiteContentData } from "../constants/websiteContentData";

const WebsiteContent = () => {
  const [activeTab, setActiveTab] = useState("hero");
  const [content, setContent] = useState(websiteContentData);

  const handleSaveSection = (section, data) => {
    // ⚠️ Abhi local state update ho raha hai — backend banne par yahan API call hogi
    setContent((prev) => ({ ...prev, [section]: data }));
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-800">Website Content</h1>
        <p className="mt-1 text-sm text-slate-500">
          Public website ka content manage karein.
        </p>
      </div>

      <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === "hero" && (
        <HeroSection
          data={content.hero}
          onSave={(data) => handleSaveSection("hero", data)}
        />
      )}
      {activeTab === "about" && (
        <AboutSection
          data={content.about}
          onSave={(data) => handleSaveSection("about", data)}
        />
      )}
      {activeTab === "contact" && (
        <ContactSection
          data={content.contact}
          onSave={(data) => handleSaveSection("contact", data)}
        />
      )}
      {activeTab === "social" && (
        <SocialLinksSection
          data={content.social}
          onSave={(data) => handleSaveSection("social", data)}
        />
      )}
    </div>
  );
};

export default WebsiteContent;
