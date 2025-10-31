import { Badge } from "../../ui/badge";
import { Card, CardContent } from "../../ui/card";
import { Separator } from "../../ui/separator";

interface Sponsor {
  name: string;
  logo: string;
  type: string;
  amount: string;
}

interface TopSponsorsProps {
  sponsors: Sponsor[];
  title?: string;
  // For future backend integration:
  // isLoading?: boolean;
  // error?: string;
  // onRefresh?: () => void;
  // onSponsorClick?: (sponsorId: string) => void;
}

export const TopSponsors = ({
  sponsors,
  title = "Our top sponsors",
}: TopSponsorsProps): JSX.Element => {
  return (
    <Card className="bg-white rounded-[7px] border border-[#eaeaea] shadow-[0px_4px_8px_#0000000f,0px_0px_4px_#0000000a]">
      <CardContent className="p-6">
        <h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-[21px] mb-6">
          {title}
        </h2>
        <div className="space-y-4">
          {sponsors.map((sponsor, index) => (
            <div key={index}>
              <div className="flex items-center gap-4">
                <img
                  className="w-[43px] h-[43px] object-cover flex-shrink-0"
                  alt={sponsor.name}
                  src={sponsor.logo}
                />
                <div className="flex-1 min-w-0">
                  <p className="[font-family:'Manrope',Helvetica] font-extrabold text-black text-[15px]">
                    {sponsor.name}
                  </p>
                  <Badge className="bg-[#9bf5f3] text-black rounded-[46px] h-auto px-3 py-0.5 mt-1">
                    <span className="[font-family:'Manrope',Helvetica] font-medium text-[10px]">
                      {sponsor.type}
                    </span>
                  </Badge>
                </div>
                <span className="[font-family:'Manrope',Helvetica] font-extrabold text-black text-[15px] flex-shrink-0">
                  {sponsor.amount}
                </span>
              </div>
              {index < sponsors.length - 1 && <Separator className="my-4" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
