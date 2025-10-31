import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Badge } from "../../ui/badge";
import { Card, CardContent } from "../../ui/card";
import { Separator } from "../../ui/separator";

interface Message {
  name: string;
  message: string;
  time: string;
  avatar: string;
  unread: number;
}

interface MessagesProps {
  messages: Message[];
  title?: string;
  // For future backend integration:
  // isLoading?: boolean;
  // error?: string;
  // onRefresh?: () => void;
  // onMessageClick?: (messageId: string) => void;
  // onMarkAsRead?: (messageId: string) => void;
}

export const Messages = ({
  messages,
  title = "Messages",
}: MessagesProps): JSX.Element => {
  return (
    <Card className="bg-white rounded-[7px] border border-[#eaeaea] shadow-[0px_4px_8px_#0000000f,0px_0px_4px_#0000000a]">
      <CardContent className="p-6">
        <h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-[21px] mb-6">
          {title}
        </h2>
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index}>
              <div className="flex items-center gap-4">
                <Avatar className="w-11 h-11 flex-shrink-0">
                  <AvatarImage src={message.avatar} />
                  <AvatarFallback>
                    {message.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0 h-11 flex flex-col justify-center">
                  <span className="[font-family:'Manrope',Helvetica] font-extrabold text-black text-[13px] leading-tight mb-0.5">
                    {message.name}
                  </span>
                  <p className="[font-family:'Inter',Helvetica] font-light text-[#4a4a4a] text-xs leading-tight truncate">
                    {message.message}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-end gap-1 flex-shrink-0 h-11">
                  <span className="[font-family:'Inter',Helvetica] font-light text-[#8a8686] text-xs">
                    {message.time}
                  </span>
                  {message.unread > 0 && (
                    <Badge className="bg-[#7641d8] text-white rounded-full w-[19px] h-[19px] flex items-center justify-center p-0">
                      <span className="[font-family:'Inter',Helvetica] font-light text-xs">
                        {message.unread}
                      </span>
                    </Badge>
                  )}
                </div>
              </div>
              {index < messages.length - 1 && <Separator className="my-4" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
