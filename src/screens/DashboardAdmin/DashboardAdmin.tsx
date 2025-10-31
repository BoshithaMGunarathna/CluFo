import {
  StatCard,
  CashflowChart,
  UpcomingEvents,
  Messages,
  TopSponsors,
} from "../../components/Dashboard";
import { Button } from "../../components/ui/button";

const statCards = [
  {
    title: "New Members",
    value: "358",
    change: "+72",
    changeText: "this week",
    prefix: "Increase by",
    showArrow: true,
    bgColor: "bg-[#ccb5f1]",
    icon: "/people.svg",
    chartIcon: "/Vector 2.svg",
    chartBg: "/vector-3.svg",
  },
  {
    title: "Total  Members",
    value: "10,312",
    change: "+200",
    changeText: "members this month",
    prefix: "New",
    showArrow: false,
    bgColor: "bg-[#f1ecb5]",
    icon: "/profile-2user.svg",
    chartIcon: "/vector-5.svg",
    chartBg: "/Vector 4.svg",
  },
  {
    title: "Sponsors Value",
    value: "£48K",
    change: "+20",
    changeText: "membership expiring this month",
    prefix: "",
    showArrow: false,
    bgColor: "bg-[#ffe1d6]",
    icon: "/crown-2.svg",
    chartIcon: "/vector-7.svg",
    chartBg: "/vector-6.svg",
  },
];

const cashflowMonths = [
  { label: "Jul", income: 100, expense: 75 },
  { label: "Aug", income: 85, expense: 60 },
  { label: "Sep", income: 50, expense: 65 },
  { label: "Oct", income: 80, expense: 85 },
  { label: "Nov", income: 90, expense: 45 },
  { label: "Dec", income: 90, expense: 85 },
];

const financialSummary = [
  {
    label: "Total income",
    value: "£ 83.45k",
    icon: "/wallet-money.svg",
    bgColor: "bg-[#ffc6d6]",
  },
  {
    label: "Total Expense",
    value: "£ 18.45k",
    icon: "/bank.svg",
    bgColor: "bg-[#d8d6ff]",
  },
  {
    label: "Net Profit",
    value: "£ 3.32k",
    icon: "/money-send.svg",
    bgColor: "bg-[#d5f2fa]",
  },
];

const upcomingEvents = [
  {
    month: "JAN",
    day: "22",
    team1Logo: "/frame-2.svg",
    team2Logo: "/logo-31.svg",
    time: "6.30 PM at La vega stadium",
    bgColor: "bg-[#d5f2fa]",
  },
  {
    month: "JAN",
    day: "25",
    team1Logo: "/frame.svg",
    team2Logo: "/frame-1.svg",
    time: "6.30 PM at La vega stadium",
    bgColor: "bg-[#d5f2fa]",
  },
  {
    month: "JAN",
    day: "27",
    team1Logo: "/logo-82.svg",
    team2Logo: "/logo-88.svg",
    time: "6.30 PM at La vega stadium",
    bgColor: "bg-[#d5f2fa]",
  },
  {
    month: "JAN",
    day: "28",
    avatar: "/ellipse-7.png",
    title: "6.30 PM Meeting with Carl at London Cafe",
    bgColor: "bg-[#d5f2fa]",
  },
];

const messages = [
  {
    name: "Peter Pan",
    message: "Trading hours will change during the holiday season..",
    time: "12.30 PM",
    avatar: "/ellipse-18.svg",
    unread: 12,
  },
  {
    name: "Samual Rodrigo",
    message: "It is a long established fact that a reader will...",
    time: "12.30 PM",
    avatar: "/ellipse-19.svg",
    unread: 8,
  },
  {
    name: "Hazi Chethana",
    message: "The point of using Lorem Ipsum is that it has....",
    time: "12.30 PM",
    avatar: "/ellipse-20.svg",
    unread: 12,
  },
];

const topSponsors = [
  {
    name: "Street Burger",
    logo: "/images-5.png",
    type: "Main Sponsor",
    amount: "£10,000.00",
  },
  {
    name: "Tom Tom Thai",
    logo: "/images-4.png",
    type: "Ball Sponsor",
    amount: "£7,000.00",
  },
  {
    name: "Uber Taxi",
    logo: "/image.png",
    type: "U18  Sponsor",
    amount: "£7,000.00",
  },
];

export const DashboardAdmin = (): JSX.Element => {
  // Handler for when cashflow filter changes
  // TODO: When backend is ready, fetch data based on selected filter
  const handleCashflowFilterChange = (filter: string) => {
    console.log(`Cashflow filter changed to: ${filter}`);
    // Example: fetchCashflowData(filter);
    // You can update state here to show loading indicator
    // setIsLoading(true);
    // api.getCashflowData(filter).then(data => {
    //   setCashflowMonths(data.months);
    //   setFinancialSummary(data.summary);
    //   setIsLoading(false);
    // });
  };

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="[font-family:'Inter',Helvetica] font-bold text-black text-[32px]">
          Dashboard
        </h1>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Button className="bg-[#2d2d2d] hover:bg-[#2d2d2d] text-white h-auto pl-6 pr-8 py-3 rounded-lg flex items-center">
              <span className="[font-family:'Inter',Helvetica] font-semibold text-base whitespace-nowrap">
                Customise Dashboard
              </span>
            </Button>
            <div className="absolute -right-[8px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[14px] border-t-transparent border-l-[14px] border-l-[#2d2d2d] border-b-[14px] border-b-transparent"></div>
          </div>
          <img
            className="w-6 h-6"
            alt="Category"
            src="/category-2-category-category-2-style7.svg"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {statCards.map((card, index) => (
          <StatCard key={index} {...card} />
        ))}
      </div>

      <div className="grid grid-cols-[2fr_1fr] gap-6 mb-6">
        <CashflowChart
          cashflowMonths={cashflowMonths}
          financialSummary={financialSummary}
          onFilterChange={handleCashflowFilterChange}
        />

        <UpcomingEvents events={upcomingEvents} />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Messages messages={messages} />

        <TopSponsors sponsors={topSponsors} />
      </div>
    </div>
  );
};
