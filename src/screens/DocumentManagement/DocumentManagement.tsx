interface DocumentManagementProps {
  isDarkMode: boolean;
}

export const DocumentManagement = ({ isDarkMode }: DocumentManagementProps): JSX.Element => {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className={`[font-family:'Inter',Helvetica] font-bold text-[32px] ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}>
          Document Management
        </h1>
      </div>

      <p className="text-2xl text-gray-400 text-center mt-20">dummy page</p>
    </div>
  );
};
