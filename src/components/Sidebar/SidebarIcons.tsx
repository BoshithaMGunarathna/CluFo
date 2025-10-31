interface IconProps {
  className?: string;
  color?: string;
}

// Dashboard icon
export const DashboardIcon = ({ className, color = "#171717" }: IconProps) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5.80863 11.2993C3.49176 10.3725 2.33333 9.90915 2.33333 9.33334C2.33333 8.75753 3.49176 8.29415 5.80863 7.36741L9.08518 6.05679C11.402 5.13005 12.5604 4.66667 14 4.66667C15.4395 4.66667 16.5979 5.13005 18.9148 6.05679L22.1914 7.36741C24.5083 8.29415 25.6667 8.75753 25.6667 9.33334C25.6667 9.90915 24.5083 10.3725 22.1914 11.2993L18.9148 12.6099C16.5979 13.5366 15.4395 14 14 14C12.5604 14 11.402 13.5366 9.08518 12.6099L5.80863 11.2993Z"
      stroke={color}
      strokeWidth="2"
    />
    <path
      opacity="0.5"
      d="M6.72715 11.6667L5.80863 12.034C3.49176 12.9608 2.33333 13.4242 2.33333 14C2.33333 14.5757 3.49176 15.0391 5.80863 15.9659L9.08518 17.2766C11.402 18.2033 12.5604 18.6667 14 18.6667C15.4395 18.6667 16.5979 18.2033 18.9148 17.2766L22.1914 15.9659C24.5083 15.0391 25.6667 14.5757 25.6667 14C25.6667 13.4242 24.5083 12.9608 22.1914 12.034L21.2729 11.6667M6.72715 16.3333L5.80863 16.7007C3.49176 17.6275 2.33333 18.0909 2.33333 18.6667C2.33333 19.2424 3.49176 19.7058 5.80863 20.6326L9.08518 21.9432C11.402 22.8699 12.5604 23.3333 14 23.3333C15.4395 23.3333 16.5979 22.8699 18.9148 21.9432L22.1914 20.6326C24.5083 19.7058 25.6667 19.2424 25.6667 18.6667C25.6667 18.0909 24.5083 17.6275 22.1914 16.7007L21.2729 16.3333"
      stroke={color}
      strokeWidth="2"
    />
  </svg>
);

// Members icon
export const MembersIcon = ({ className, color = "#171717" }: IconProps) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10.6867 12.6817C10.57 12.67 10.43 12.67 10.3017 12.6817C7.525 12.5883 5.32 10.3133 5.32 7.51333C5.32 4.65499 7.63 2.33333 10.5 2.33333C13.3583 2.33333 15.68 4.65499 15.68 7.51333C15.6683 10.3133 13.4633 12.5883 10.6867 12.6817Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.4"
      d="M19.145 4.66667C21.4083 4.66667 23.2283 6.49834 23.2283 8.75C23.2283 10.955 21.4783 12.7517 19.2967 12.8333C19.2033 12.8217 19.0983 12.8217 18.9933 12.8333"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.85333 16.9867C2.03 18.8767 2.03 21.9567 4.85333 23.835C8.06167 25.9817 13.3233 25.9817 16.5317 23.835C19.355 21.945 19.355 18.865 16.5317 16.9867C13.335 14.8517 8.07333 14.8517 4.85333 16.9867Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.4"
      d="M21.3967 23.3333C22.2367 23.1583 23.03 22.82 23.6833 22.3183C25.5033 20.9533 25.5033 18.7017 23.6833 17.3367C23.0417 16.8467 22.26 16.52 21.4317 16.3333"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Finance icon
export const FinanceIcon = ({ className, color = "#171717" }: IconProps) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M25.6667 7.00001V9.82334C25.6667 11.6667 24.5 12.8333 22.6566 12.8333H18.6667V4.67834C18.6667 3.38334 19.7284 2.33334 21.0234 2.33334C22.295 2.34501 23.4617 2.85834 24.3017 3.69834C25.1417 4.55001 25.6667 5.71668 25.6667 7.00001Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.33333 8.16668V24.5C2.33333 25.4683 3.42997 26.0167 4.19997 25.4333L6.195 23.94C6.66166 23.59 7.31501 23.6367 7.73501 24.0567L9.67164 26.005C10.1266 26.46 10.8734 26.46 11.3284 26.005L13.2884 24.045C13.6967 23.6367 14.35 23.59 14.805 23.94L16.8 25.4333C17.57 26.005 18.6667 25.4567 18.6667 24.5V4.66668C18.6667 3.38334 19.7167 2.33334 21 2.33334H8.16667H7C3.5 2.33334 2.33333 4.42168 2.33333 7.00001V8.16668Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.4"
      d="M7 10.5H14"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.4"
      d="M7.875 15.1667H13.125"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Fan Shop icon
export const FanShopIcon = ({ className, color = "#171717" }: IconProps) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M14 14C16.135 14 17.71 12.2617 17.5 10.1267L16.73 2.33334H11.2817L10.5 10.1267C10.29 12.2617 11.865 14 14 14Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.3617 14C23.7183 14 25.445 12.0867 25.2117 9.74168L24.885 6.53334C24.465 3.50001 23.2983 2.33334 20.2417 2.33334H16.6833L17.5 10.5117C17.6983 12.4367 19.4367 14 21.3617 14Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.58 14C8.505 14 10.2433 12.4367 10.43 10.5117L10.6867 7.93334L11.2467 2.33334H7.68833C4.63167 2.33334 3.465 3.50001 3.045 6.53334L2.73 9.74168C2.49667 12.0867 4.22333 14 6.58 14Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g opacity="0.4">
      <path
        d="M3.51139 13.0897V18.328C3.51139 23.5664 5.61139 25.6664 10.8497 25.6664H17.1381C22.3764 25.6664 24.4764 23.5664 24.4764 18.328V13.0897"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 19.8333C12.0517 19.8333 11.0833 20.8017 11.0833 22.75V25.6667H16.9167V22.75C16.9167 20.8017 15.9483 19.8333 14 19.8333Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

// Events icon
export const EventsIcon = ({ className, color = "#171717" }: IconProps) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M9.33333 2.33334V5.83334"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.6667 2.33334V5.83334"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.4"
      d="M4.08333 10.605H23.9167"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24.5 9.91668V19.8333C24.5 23.3333 22.75 25.6667 18.6667 25.6667H9.33333C5.25 25.6667 3.5 23.3333 3.5 19.8333V9.91668C3.5 6.41668 5.25 4.08334 9.33333 4.08334H18.6667C22.75 4.08334 24.5 6.41668 24.5 9.91668Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.4"
      d="M18.3105 15.9834H18.321"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.4"
      d="M18.3105 19.4834H18.321"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.4"
      d="M13.9947 15.9834H14.0052"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.4"
      d="M13.9947 19.4834H14.0052"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.4"
      d="M9.6767 15.9834H9.68718"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.4"
      d="M9.6767 19.4833H9.68718"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Volunteers icon
export const VolunteersIcon = ({ className, color = "#171717" }: IconProps) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M17.955 6.07834L19.6 9.36833C19.8217 9.82333 20.4167 10.255 20.9183 10.3483L23.8934 10.8383C25.795 11.1533 26.2384 12.53 24.8734 13.9067L22.5517 16.2283C22.1667 16.6133 21.945 17.3717 22.0734 17.92L22.7383 20.79C23.2633 23.0533 22.05 23.94 20.055 22.75L17.2667 21.0933C16.765 20.79 15.925 20.79 15.4233 21.0933L12.635 22.75C10.64 23.9283 9.42668 23.0533 9.95168 20.79L10.6167 17.92C10.745 17.3833 10.5234 16.625 10.1384 16.2283L7.8167 13.9067C6.4517 12.5417 6.89502 11.165 8.79669 10.8383L11.7717 10.3483C12.2733 10.2667 12.8683 9.82333 13.09 9.36833L14.735 6.07834C15.61 4.29334 17.0567 4.29334 17.955 6.07834Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.4"
      d="M9.33333 5.83334H2.33333"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.4"
      d="M5.83333 22.1667H2.33333"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.4"
      d="M3.5 14H2.33333"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Sponsors icon
export const SponsorsIcon = ({ className, color = "#171717" }: IconProps) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M19.4833 22.1434H8.51667C8.02667 22.1434 7.47833 21.7584 7.315 21.2917L2.485 7.78169C1.79667 5.84502 2.60167 5.25002 4.25833 6.44002L8.80833 9.69502C9.56667 10.22 10.43 9.95169 10.7567 9.10002L12.81 3.62836C13.4633 1.87836 14.5483 1.87836 15.2017 3.62836L17.255 9.10002C17.5817 9.95169 18.445 10.22 19.1917 9.69502L23.4617 6.65002C25.2817 5.34336 26.1567 6.00836 25.41 8.12002L20.6967 21.315C20.5217 21.7584 19.9733 22.1434 19.4833 22.1434Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.34"
      d="M7.58333 25.6667H20.4167"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.34"
      d="M11.0833 16.3333H16.9167"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Inventory icon
export const InventoryIcon = ({ className, color = "#171717" }: IconProps) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g opacity="0.4">
      <path
        d="M3.69824 8.67999L13.9999 14.6416L24.2315 8.71496"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 25.2117V14.63"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5851 2.89331L5.35514 6.35835C3.94347 7.14002 2.78849 9.09999 2.78849 10.71V17.3017C2.78849 18.9117 3.94347 20.8717 5.35514 21.6533L11.5851 25.1184C12.9151 25.8534 15.0968 25.8534 16.4268 25.1184L22.6568 21.6533C24.0685 20.8717 25.2235 18.9117 25.2235 17.3017V10.71C25.2235 9.09999 24.0685 7.14002 22.6568 6.35835L16.4268 2.89331C15.0851 2.14665 12.9151 2.14665 11.5851 2.89331Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <path
      d="M19.8333 15.4467V11.1767L8.76168 4.78333"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Accounting icon
export const AccountingIcon = ({ className, color = "#171717" }: IconProps) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M2.33333 25.6667H25.6667"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.375 4.66665V25.6666H16.625V4.66665C16.625 3.38331 16.1 2.33331 14.525 2.33331H13.475C11.9 2.33331 11.375 3.38331 11.375 4.66665Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.4"
      d="M3.5 11.6666V25.6666H8.16667V11.6666C8.16667 10.3833 7.7 9.33331 6.3 9.33331H5.36667C3.96667 9.33331 3.5 10.3833 3.5 11.6666Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.4"
      d="M19.8333 17.5V25.6667H24.5V17.5C24.5 16.2167 24.0333 15.1667 22.6333 15.1667H21.7C20.3 15.1667 19.8333 16.2167 19.8333 17.5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Social Media icon
export const SocialMediaIcon = ({ className, color = "#171717" }: IconProps) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M14 25.6666C20.4433 25.6666 25.6667 20.4433 25.6667 14C25.6667 7.55666 20.4433 2.33331 14 2.33331C7.55668 2.33331 2.33333 7.55666 2.33333 14C2.33333 20.4433 7.55668 25.6666 14 25.6666Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g opacity="0.4">
      <path
        d="M9.33288 3.5H10.4995C8.22454 10.3133 8.22454 17.6867 10.4995 24.5H9.33288"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 3.5C19.775 10.3133 19.775 17.6867 17.5 24.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 18.6667V17.5C10.3133 19.775 17.6867 19.775 24.5 17.5V18.6667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 10.5001C10.3133 8.22513 17.6867 8.22513 24.5 10.5001"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

// Document Management icon
export const DocumentManagementIcon = ({ className, color = "#171717" }: IconProps) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M25.2817 16.6833L24.815 22.5166C24.64 24.3016 24.5 25.6666 21.3383 25.6666H6.66167C3.5 25.6666 3.36 24.3016 3.185 22.5166L2.71833 16.6833C2.625 15.715 2.92833 14.8166 3.47667 14.1283C3.48833 14.1166 3.48833 14.1166 3.5 14.105C4.14167 13.3233 5.11 12.8333 6.195 12.8333H21.805C22.89 12.8333 23.8467 13.3233 24.4767 14.0816C24.4883 14.0933 24.5 14.105 24.5 14.1166C25.0717 14.805 25.3867 15.7033 25.2817 16.6833Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      opacity="0.4"
      d="M4.08333 13.335V7.32668C4.08333 3.36001 5.075 2.36835 9.04167 2.36835H10.5233C12.005 2.36835 12.3433 2.81168 12.9033 3.55835L14.385 5.54168C14.7583 6.03168 14.98 6.33501 15.9717 6.33501H18.9467C22.9133 6.33501 23.905 7.32668 23.905 11.2933V13.3817"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.4"
      d="M11.0017 19.8333H16.9983"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Settings icon
export const SettingsIcon = ({ className, color = "#171717" }: IconProps) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      opacity="0.34"
      d="M14 17.5C15.933 17.5 17.5 15.933 17.5 14C17.5 12.067 15.933 10.5 14 10.5C12.067 10.5 10.5 12.067 10.5 14C10.5 15.933 12.067 17.5 14 17.5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.33333 15.0267V12.9734C2.33333 11.76 3.325 10.7567 4.55 10.7567C6.66167 10.7567 7.525 9.26336 6.46333 7.43169C5.85667 6.38169 6.21833 5.01669 7.28 4.41003L9.29833 3.25503C10.22 2.70669 11.41 3.03336 11.9583 3.95503L12.0867 4.17669C13.1367 6.00836 14.8633 6.00836 15.925 4.17669L16.0533 3.95503C16.6017 3.03336 17.7917 2.70669 18.7133 3.25503L20.7317 4.41003C21.7933 5.01669 22.155 6.38169 21.5483 7.43169C20.4867 9.26336 21.35 10.7567 23.4617 10.7567C24.675 10.7567 25.6783 11.7484 25.6783 12.9734V15.0267C25.6783 16.24 24.6867 17.2434 23.4617 17.2434C21.35 17.2434 20.4867 18.7367 21.5483 20.5684C22.155 21.63 21.7933 22.9834 20.7317 23.59L18.7133 24.745C17.7917 25.2934 16.6017 24.9667 16.0533 24.045L15.925 23.8234C14.875 21.9917 13.1483 21.9917 12.0867 23.8234L11.9583 24.045C11.41 24.9667 10.22 25.2934 9.29833 24.745L7.28 23.59C6.21833 22.9834 5.85667 21.6184 6.46333 20.5684C7.525 18.7367 6.66167 17.2434 4.55 17.2434C3.325 17.2434 2.33333 16.24 2.33333 15.0267Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
