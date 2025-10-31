import { useState } from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Header } from "./components/Header";
import { DashboardAdmin } from "./screens/DashboardAdmin";
import { Members } from "./screens/Members";
import { Finance } from "./screens/Finance";
import { FanShop } from "./screens/FanShop";
import { Events } from "./screens/Events";
import { Volunteers } from "./screens/Volunteers";
import { Sponsors } from "./screens/Sponsors";
import { Inventory } from "./screens/Inventory";
import { Accounting } from "./screens/Accounting";
import { SocialMedia } from "./screens/SocialMedia";
import { DocumentManagement } from "./screens/DocumentManagement";
import { Settings } from "./screens/Settings";

type PageType = 
  | "Dashboard"
  | "Members"
  | "Finance"
  | "Fan Shop"
  | "Events"
  | "Volunteers"
  | "Sponsors"
  | "Inventory"
  | "Accounting"
  | "Social Media"
  | "Document Management"
  | "Settings";

export const App = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<PageType>("Dashboard");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Dashboard":
        return <DashboardAdmin />;
      case "Members":
        return <Members />;
      case "Finance":
        return <Finance />;
      case "Fan Shop":
        return <FanShop />;
      case "Events":
        return <Events />;
      case "Volunteers":
        return <Volunteers />;
      case "Sponsors":
        return <Sponsors />;
      case "Inventory":
        return <Inventory />;
      case "Accounting":
        return <Accounting />;
      case "Social Media":
        return <SocialMedia />;
      case "Document Management":
        return <DocumentManagement />;
      case "Settings":
        return <Settings />;
      default:
        return <DashboardAdmin />;
    }
  };

  return (
    <div className={`flex min-h-screen w-full transition-colors duration-300 ${isDarkMode ? 'bg-[#1a1a1a] dark' : 'bg-[#f2f6fa]'}`}>
      <Sidebar 
        currentPage={currentPage} 
        onPageChange={handlePageChange} 
        isCollapsed={isSidebarCollapsed}
        isDarkMode={isDarkMode}
      />
      
      <main className={`flex-1 flex flex-col h-screen overflow-hidden transition-all duration-300 ${isSidebarCollapsed ? 'ml-[80px]' : 'ml-[248px]'}`}>
        <Header 
          onToggleSidebar={toggleSidebar} 
          onToggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
        />
        {renderPage()}
      </main>
    </div>
  );
};
