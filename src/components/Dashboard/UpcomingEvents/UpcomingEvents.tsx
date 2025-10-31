import { Card, CardContent } from "../../ui/card";
import { Separator } from "../../ui/separator";

interface UpcomingEvent {
  month: string;
  day: string;
  team1Logo?: string;
  team2Logo?: string;
  time?: string;
  avatar?: string;
  title?: string;
  bgColor: string;
}

interface UpcomingEventsProps {
  events: UpcomingEvent[];
  title?: string;
  // For future backend integration:
  // isLoading?: boolean;
  // error?: string;
  // onRefresh?: () => void;
  // onEventClick?: (eventId: string) => void;
}

export const UpcomingEvents = ({
  events,
  title = "Upcoming Events",
}: UpcomingEventsProps): JSX.Element => {
  return (
    <Card className="bg-white rounded-[7px] border border-[#eaeaea] shadow-[0px_4px_8px_#0000000f,0px_0px_4px_#0000000a]">
      <CardContent className="p-6">
        <h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-[21px] mb-6">
          {title}
        </h2>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index}>
              <div className="flex items-center gap-4">
                <div
                  className={`w-[55px] h-[55px] ${event.bgColor} rounded-[5px] flex flex-col items-center justify-center flex-shrink-0`}
                >
                  <span className="[font-family:'Inter',Helvetica] font-semibold text-black text-xs">
                    {event.month}
                  </span>
                  <span className="[font-family:'Inter',Helvetica] font-semibold text-black text-[21px]">
                    {event.day}
                  </span>
                </div>
                {event.team1Logo && event.team2Logo ? (
                  <div className="flex items-center gap-2 flex-1">
                    <img
                      className="h-10"
                      alt="Team 1"
                      src={event.team1Logo}
                    />
                    <span className="[font-family:'Manrope',Helvetica] font-bold text-[#a8a7a7] text-lg">
                      vs
                    </span>
                    <img
                      className="h-10"
                      alt="Team 2"
                      src={event.team2Logo}
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-3 flex-1">
                    <img
                      className="w-[42px] h-[42px] rounded-full object-cover"
                      alt="Avatar"
                      src={event.avatar}
                    />
                    <p className="[font-family:'Inter',Helvetica] font-light text-black text-xs leading-3">
                      {event.title}
                    </p>
                  </div>
                )}
              </div>
              {event.time && (
                <p className="ml-[71px] [font-family:'Inter',Helvetica] font-light text-black text-xs mt-1">
                  {event.time}
                </p>
              )}
              {index < events.length - 1 && <Separator className="my-4" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
