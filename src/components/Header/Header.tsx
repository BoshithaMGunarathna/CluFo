import {
  BellIcon,
  ChevronDownIcon,
  MailIcon,
  MenuIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar";
import { Input } from "../ui/input";

interface HeaderProps {
  onToggleSidebar: () => void;
  onToggleDarkMode: () => void;
  isDarkMode: boolean;
}

export const Header = ({ onToggleSidebar, onToggleDarkMode, isDarkMode }: HeaderProps): JSX.Element => {
  return (
    <header className={`h-[77px] border-b flex items-center justify-between px-6 flex-shrink-0 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-[#2d2d2d] border-[#3d3d3d]' 
        : 'bg-white border-[#eaeaea]'
    }`}>
      <div className="flex items-center gap-4">
        <MenuIcon 
          className={`w-8 h-8 cursor-pointer hover:text-[#7641d8] transition-colors ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}
          onClick={onToggleSidebar}
        />
        <div className="relative w-[240px]">
          <Input
            placeholder="Search"
            className={`pl-10 border [font-family:'Inter',Helvetica] text-sm transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-[#3d3d3d] border-[#4d4d4d] text-[#b0b0b0] placeholder:text-[#808080]' 
                : 'bg-white border-[#e9e9e9] text-[#736d6d]'
            }`}
          />
          <SearchIcon className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
            isDarkMode ? 'text-[#b0b0b0]' : 'text-[#736d6d]'
          }`} />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div 
          onClick={onToggleDarkMode}
          className="cursor-pointer hover:opacity-70 transition-opacity"
        >
          {isDarkMode ? (
            <SunIcon className="w-6 h-6 text-yellow-400" />
          ) : (
            <MoonIcon className="w-6 h-6 text-black" />
          )}
        </div>
        <BellIcon className={`w-6 h-6 cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'}`} />
        <MailIcon className={`w-6 h-6 cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'}`} />
        <img
          className="w-6 h-6 object-cover"
          alt="United kingdom"
          src="/united-kingdom-1--1.png"
        />
        <div className="flex items-center gap-3">
          <Avatar className="w-[38px] h-[38px]">
            <AvatarImage src="/ellipse-11.svg" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className={`[font-family:'Manrope',Helvetica] font-normal text-xs ${
              isDarkMode ? 'text-[#b0b0b0]' : 'text-black'
            }`}>
              Welcome back
            </span>
            <span className={`[font-family:'Manrope',Helvetica] font-bold text-base ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>
              Jane Paule
            </span>
          </div>
          <ChevronDownIcon className={`w-4 h-4 ${isDarkMode ? 'text-white' : 'text-black'}`} />
        </div>
      </div>
    </header>
  );
};
