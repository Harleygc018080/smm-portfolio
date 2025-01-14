"use client"
import Header from './components/header';
import WelcomeSection from './components/welcomeSection';
import ProjectsSection from './components/projectSection';
import ToolsSection from './components/toolsSection';
import ContactSection from './components/contactSection';

export default function Home() {
  return (
    <>
      <Header />
      <WelcomeSection />
      <ProjectsSection />
      <ToolsSection />
      <ContactSection />
    </>
  );
}