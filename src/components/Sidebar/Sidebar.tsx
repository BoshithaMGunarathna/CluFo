import {
  DashboardIcon,
  MembersIcon,
  FinanceIcon,
  FanShopIcon,
  EventsIcon,
  VolunteersIcon,
  SponsorsIcon,
  InventoryIcon,
  AccountingIcon,
  SocialMediaIcon,
  DocumentManagementIcon,
  SettingsIcon,
} from "./SidebarIcons";

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

interface SidebarProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
  isCollapsed: boolean;
  isDarkMode: boolean;
}

const sidebarItems = [
  { icon: DashboardIcon, label: "Dashboard" as PageType },
  {
    icon: MembersIcon,
    label: "Members" as PageType,
    submenu: [
      { label: "Member List", active: false },
      { label: "Member Categories", active: false },
    ],
  },
  { icon: FinanceIcon, label: "Finance" as PageType },
  { icon: FanShopIcon, label: "Fan Shop" as PageType },
  { icon: EventsIcon, label: "Events" as PageType },
  { icon: VolunteersIcon, label: "Volunteers" as PageType },
  { icon: SponsorsIcon, label: "Sponsors" as PageType },
  { icon: InventoryIcon, label: "Inventory" as PageType },
  { icon: AccountingIcon, label: "Accounting" as PageType },
  { icon: SocialMediaIcon, label: "Social Media" as PageType },
  { icon: DocumentManagementIcon, label: "Document Management" as PageType },
];

export const Sidebar = ({ currentPage, onPageChange, isCollapsed, isDarkMode }: SidebarProps): JSX.Element => {
  return (
    <aside className={`border-r flex flex-col h-screen fixed left-0 top-0 transition-all duration-300 ${
      isCollapsed ? 'w-[80px]' : 'w-[248px]'
    } ${
      isDarkMode 
        ? 'bg-[#2d2d2d] border-[#3d3d3d]' 
        : 'bg-[#f2f6fa] border-[#eaeaea]'
    }`}>
      <div className="h-[77px] flex items-center justify-center flex-shrink-0">
        {!isCollapsed && (
          <img className="w-[144px] h-[52px]" alt="Group" src="/group-4.png" />
        )}
        {isCollapsed && (
          <img className="w-10 h-10 object-contain" alt="Logo" src="/collapsedLogo.png" />
        )}
      </div>

      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        {sidebarItems.map((item, index) => (
          <div key={index}>
            <div
              className={`flex items-center gap-3 px-3 py-2 rounded-lg mb-1 cursor-pointer transition-colors ${
                currentPage === item.label
                  ? "bg-[#7641d8]" 
                  : isDarkMode 
                    ? "hover:bg-[#3d3d3d]"
                    : "hover:bg-[#e5e5e5]"
              } ${isCollapsed ? 'justify-center' : ''}`}
              onClick={() => onPageChange(item.label)}
              title={isCollapsed ? item.label : undefined}
            >
              <item.icon
                className="w-7 h-7 flex-shrink-0"
                color={currentPage === item.label ? "white" : isDarkMode ? "#ffffff" : "#171717"}
              />
              {!isCollapsed && (
                <span
                  className={`[font-family:'Manrope',Helvetica] font-normal text-base ${
                    currentPage === item.label 
                      ? "text-white" 
                      : isDarkMode 
                        ? "text-[#e0e0e0]" 
                        : "text-black"
                  }`}
                >
                  {item.label}
                </span>
              )}
            </div>
            {!isCollapsed && item.submenu && (
              <div className="ml-10 space-y-1">
                {item.submenu.map((subitem, subindex) => (
                  <div
                    key={subindex}
                    className="flex items-center gap-2 py-1 cursor-pointer hover:opacity-70 transition-opacity"
                    onClick={() => console.log(`Navigating to ${item.label} > ${subitem.label}`)}
                  >
                    <div className="w-[11px] h-[11px] bg-[#21adbd] rounded-full" />
                    <span
                      className={`[font-family:'Inter',Helvetica] ${subindex === 0 ? "font-bold" : "font-normal"} text-base ${
                        isDarkMode ? "text-[#e0e0e0]" : "text-black"
                      }`}
                    >
                      {subitem.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="px-4 pb-6 flex-shrink-0">
        <div 
          className={`flex items-center gap-3 px-3 py-2 cursor-pointer rounded-lg transition-colors ${
            isCollapsed ? 'justify-center' : ''
          } ${
            isDarkMode ? 'hover:bg-[#3d3d3d]' : 'hover:bg-[#e5e5e5]'
          }`}
          onClick={() => onPageChange("Settings")}
          title={isCollapsed ? "Settings" : undefined}
        >
          <SettingsIcon className="w-7 h-7 flex-shrink-0" color={isDarkMode ? "#ffffff" : "#171717"} />
          {!isCollapsed && (
            <span className={`[font-family:'Inter',Helvetica] font-normal text-base ${
              isDarkMode ? 'text-[#e0e0e0]' : 'text-black'
            }`}>
              Settings
            </span>
          )}
        </div>
      </div>
    </aside>
  );
};
