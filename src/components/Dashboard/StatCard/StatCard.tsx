import { Badge } from "../../ui/badge";
import { Card, CardContent } from "../../ui/card";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeText: string;
  bgColor: string;
  icon: string;
  chartIcon: string;
  chartBg: string;
  prefix?: string;
  showArrow?: boolean;
}

export const StatCard = ({
  title,
  value,
  change,
  changeText,
  bgColor,
  icon,
  chartIcon,
  chartBg,
  prefix = "",
  showArrow = false,
}: StatCardProps): JSX.Element => {
 return (
    <Card className="bg-white rounded-lg border border-[#eaeaea] shadow-sm">
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div
              className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
            >
              <img className="w-6 h-6" alt="Icon" src={icon} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#6b7280] text-sm leading-tight">
                {title}
              </p>
              <p className="[font-family:'Inter',Helvetica] font-semibold text-[#111827] text-[32px] leading-tight">
                {value}
              </p>
            </div>
          </div>
          <div className="relative flex-shrink-0 ml-4">
            <img className="w-[88px] h-12" alt="Chart bg" src={chartBg} />
            <img
              className="absolute top-0 left-0 w-[88px] h-12"
              alt="Chart"
              src={chartIcon}
            />
          </div>
        </div>
        <div className="flex items-center gap-1.5 whitespace-nowrap overflow-hidden">
          {showArrow && prefix && (
            <>
              <Badge className="bg-[#d1fae5] text-[#3fbba9] [font-family:'Inter',Helvetica] font-medium text-xs h-auto px-2 py-0.5 rounded-full hover:bg-[#d1fae5] flex items-center gap-1 flex-shrink-0">
                <img src="/uparrow.svg" alt="Up arrow" className="w-3 h-3" />
              </Badge>
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#6b7280] text-xs">
                {prefix}
              </span>
            </>
          )}
          <Badge className="bg-[#d1fae5] text-[#059669] [font-family:'Inter',Helvetica] font-medium text-xs h-auto px-2 py-0.5 rounded-full hover:bg-[#d1fae5] flex items-center gap-1 flex-shrink-0">
            <span>{change}</span>
          </Badge>
          <span className="[font-family:'Inter',Helvetica] font-normal text-[#6b7280] text-xs truncate">
            {changeText}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
