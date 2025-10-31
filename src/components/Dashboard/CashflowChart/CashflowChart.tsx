import { useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { Separator } from "../../ui/separator";

interface CashflowMonth {
  label: string;
  income: number;
  expense: number;
}

interface FinancialSummaryItem {
  label: string;
  value: string;
  icon: string;
  bgColor: string;
}

type TimeFilter = "Week" | "Month" | "Year";

interface CashflowChartProps {
  cashflowMonths: CashflowMonth[];
  financialSummary: FinancialSummaryItem[];
  title?: string;
  subtitle?: string;
  onFilterChange?: (filter: TimeFilter) => void;
  // For future backend integration:
  // isLoading?: boolean;
  // error?: string;
  // onRefresh?: () => void;
}

export const CashflowChart = ({
  cashflowMonths,
  financialSummary,
  title = "Cashflow",
  subtitle = "Last 6 months",
  onFilterChange,
}: CashflowChartProps): JSX.Element => {
  const [selectedFilter, setSelectedFilter] = useState<TimeFilter>("Month");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const timeFilters: TimeFilter[] = ["Week", "Month", "Year"];

  const handleFilterChange = (filter: TimeFilter) => {
    setSelectedFilter(filter);
    setIsDropdownOpen(false);
    
    // Call the callback if provided (for future backend integration)
    if (onFilterChange) {
      onFilterChange(filter);
    }
    
    // TODO: When backend is ready, fetch data based on selected filter
    // Example: fetchCashflowData(filter);
    console.log(`Filter changed to: ${filter}`);
  };
  return (
    <Card className="bg-white rounded-[7px] border border-[#eaeaea] shadow-[0px_4px_8px_#0000000f,0px_0px_4px_#0000000a]">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-[21px] mb-1">
              {title}
            </h2>
            <p className="[font-family:'Inter',Helvetica] font-light text-black text-sm">
              {subtitle}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 bg-[#7641d8] rounded-[7px]" />
              <span className="[font-family:'Manrope',Helvetica] font-light text-black text-xs">
                Income
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 bg-[#21adbd] rounded-[7px]" />
              <span className="[font-family:'Manrope',Helvetica] font-light text-black text-xs">
                Expense
              </span>
            </div>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 bg-white rounded-[5px] border border-[#eaeaea] px-3 py-1 cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <img
                  className="w-[18px] h-[18px]"
                  alt="Calendar"
                  src="/calendar.svg"
                />
                <span className="[font-family:'Inter',Helvetica] font-light text-black text-sm">
                  {selectedFilter}
                </span>
                <img
                  className="w-2.5 h-2"
                  alt="Polygon"
                  src="/polygon-1.svg"
                />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 bg-white rounded-[5px] border border-[#eaeaea] shadow-lg z-10 min-w-[120px]">
                  {timeFilters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => handleFilterChange(filter)}
                      className={`w-full text-left px-4 py-2 [font-family:'Inter',Helvetica] text-sm hover:bg-gray-50 transition-colors first:rounded-t-[5px] last:rounded-b-[5px] ${
                        selectedFilter === filter
                          ? "bg-[#f2f6fa] text-[#7641d8] font-medium"
                          : "text-black font-light"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="relative h-[280px]">
          <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-right pr-2">
            <span className="[font-family:'Manrope',Helvetica] font-light text-black text-xs">
              £100k
            </span>
            <span className="[font-family:'Manrope',Helvetica] font-light text-black text-xs">
              £75k
            </span>
            <span className="[font-family:'Manrope',Helvetica] font-light text-black text-xs">
              £50k
            </span>
            <span className="[font-family:'Manrope',Helvetica] font-light text-black text-xs">
              £25k
            </span>
            <span className="[font-family:'Manrope',Helvetica] font-light text-black text-xs">
              £0k
            </span>
          </div>

          <div className="ml-12 h-full flex items-end justify-between gap-8 border-b border-[#eaeaea] pb-8">
            {cashflowMonths.map((month, index) => (
              <div
                key={index}
                className="flex-1 flex items-end justify-center gap-1 h-full"
              >
                <div className="relative w-6 h-full flex items-end">
                  <div
                    className="w-full bg-[#7641d8] rounded-[3px_3px_0px_0px]"
                    style={{ height: `${month.income}%` }}
                  />
                </div>
                <div className="relative w-6 h-full flex items-end">
                  <div
                    className="w-full bg-[#21adbd] rounded-[3px_3px_0px_0px]"
                    style={{ height: `${month.expense}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="ml-12 flex justify-between mt-2">
            {cashflowMonths.map((month, index) => (
              <span
                key={index}
                className="flex-1 text-center [font-family:'Manrope',Helvetica] font-light text-black text-xs"
              >
                {month.label}
              </span>
            ))}
          </div>
        </div>

        <Separator className="my-6" />

        <div className="grid grid-cols-3 gap-6">
          {financialSummary.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className={`w-[41px] h-[41px] ${item.bgColor} rounded-[5px] flex items-center justify-center`}
              >
                <img className="w-8 h-8" alt="Icon" src={item.icon} />
              </div>
              <div>
                <p className="[font-family:'Inter',Helvetica] font-light text-black text-xs">
                  {item.label}
                </p>
                <p className="[font-family:'Inter',Helvetica] font-bold text-black text-lg">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
