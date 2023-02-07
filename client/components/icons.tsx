import { SVGProps } from "react";

const iconColor = "#6750A4";

export const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={40}
      height={44}
      viewBox="0 0 40 44"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M17.71.911a3.333 3.333 0 014.58 0l16.145 15.265A5 5 0 0140 19.809v18.564a5 5 0 01-5 5h-6.667a5 5 0 01-5-5V30.04c0-.92-.746-1.667-1.666-1.667h-3.334c-.92 0-1.666.746-1.666 1.667v8.333a5 5 0 01-5 5H5a5 5 0 01-5-5V19.809a5 5 0 011.565-3.633L17.71.91zM20 3.333L3.855 18.598a1.667 1.667 0 00-.522 1.21v18.565c0 .92.747 1.667 1.667 1.667h6.667c.92 0 1.666-.747 1.666-1.667V30.04a5 5 0 015-5h3.334a5 5 0 015 5v8.333c0 .92.746 1.667 1.666 1.667H35c.92 0 1.667-.747 1.667-1.667V19.809c0-.458-.189-.896-.522-1.211L20 3.333z" />
    </svg>
  );
};

export const SessionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={38}
    height={42}
    viewBox="0 0 38 42"
    // fill={iconColor}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10.5 1.5A1.5 1.5 0 0 1 12 0h12a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5ZM18 12a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 3 0v-12A1.5 1.5 0 0 0 18 12Z" />
    <path d="M36 24c0 9.941-8.059 18-18 18S0 33.941 0 24 8.059 6 18 6s18 8.059 18 18Zm-3 0c0-8.284-6.716-15-15-15C9.716 9 3 15.716 3 24c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15ZM32.86 4.926a1.5 1.5 0 1 0-2.122 2.121l4.209 4.209a1.5 1.5 0 1 0 2.121-2.122L32.86 4.926Z" />
  </svg>
);

export const GamesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={29}
    viewBox="0 0 40 29"
    // fill={iconColor}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.25 8.2c.69 0 1.25.56 1.25 1.25v3.75h3.25a1.25 1.25 0 1 1 0 2.5H13.5v3.25a1.25 1.25 0 1 1-2.5 0V15.7H7.25a1.25 1.25 0 1 1 0-2.5H11V9.45c0-.69.56-1.25 1.25-1.25ZM28 17.7a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm1.5-4.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM0 14.2C0 6.468 6.268.2 14 .2h12c7.732 0 14 6.268 14 14s-6.268 14-14 14H14c-7.732 0-14-6.268-14-14ZM14 2.7C7.649 2.7 2.5 7.849 2.5 14.2S7.649 25.7 14 25.7h12c6.351 0 11.5-5.149 11.5-11.5S32.351 2.7 26 2.7H14Z" />
  </svg>
);

export const StatsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={39}
    height={39}
    viewBox="0 0 39 39"
    // fill={iconColor}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14.4 4.8a4.8 4.8 0 1 1 9.6 0v28.8a4.8 4.8 0 1 1-9.6 0V4.8Zm4.8-2.4a2.4 2.4 0 0 0-2.4 2.4v28.8a2.4 2.4 0 1 0 4.8 0V4.8a2.4 2.4 0 0 0-2.4-2.4ZM0 24a4.8 4.8 0 1 1 9.6 0v9.6a4.8 4.8 0 1 1-9.6 0V24Zm4.8-2.4A2.4 2.4 0 0 0 2.4 24v9.6a2.4 2.4 0 1 0 4.8 0V24a2.4 2.4 0 0 0-2.4-2.4ZM33.6 9.6a4.8 4.8 0 0 0-4.8 4.8v19.2a4.8 4.8 0 1 0 9.6 0V14.4a4.8 4.8 0 0 0-4.8-4.8Zm-2.4 4.8a2.4 2.4 0 1 1 4.8 0v19.2a2.4 2.4 0 1 1-4.8 0V14.4Z" />
  </svg>
);

export const SettingsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={39}
    height={41}
    viewBox="0 0 39 41"
    // fill={iconColor}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M.058 14.118a20.379 20.379 0 0 1 4.273-7.39 1.2 1.2 0 0 1 1.295-.325l4.603 1.646A2.4 2.4 0 0 0 13.4 6.22l.876-4.814a1.2 1.2 0 0 1 .93-.959A20.477 20.477 0 0 1 19.474 0c1.445 0 2.872.15 4.264.447a1.2 1.2 0 0 1 .93.958l.88 4.815a2.4 2.4 0 0 0 3.168 1.83l4.604-1.647a1.2 1.2 0 0 1 1.295.326 20.379 20.379 0 0 1 4.273 7.39 1.2 1.2 0 0 1-.365 1.283l-3.732 3.169a2.4 2.4 0 0 0 0 3.659l3.732 3.168a1.2 1.2 0 0 1 .365 1.284 20.379 20.379 0 0 1-4.273 7.39 1.2 1.2 0 0 1-1.294.325l-4.604-1.646a2.4 2.4 0 0 0-3.17 1.83l-.879 4.814a1.2 1.2 0 0 1-.93.958 20.473 20.473 0 0 1-4.264.447c-1.447 0-2.875-.15-4.267-.447a1.2 1.2 0 0 1-.93-.959l-.878-4.814a2.4 2.4 0 0 0-3.168-1.83l-4.604 1.647a1.2 1.2 0 0 1-1.295-.326 20.378 20.378 0 0 1-4.273-7.39 1.2 1.2 0 0 1 .365-1.283l3.732-3.168a2.4 2.4 0 0 0 0-3.66L.423 15.403a1.2 1.2 0 0 1-.365-1.284Zm2.546-.013 3.104 2.636a4.8 4.8 0 0 1 0 7.318l-3.104 2.636A17.98 17.98 0 0 0 5.59 31.86l3.83-1.37a4.8 4.8 0 0 1 6.337 3.659l.73 4.005a18.135 18.135 0 0 0 5.966 0l.732-4.005a4.8 4.8 0 0 1 6.338-3.659l3.83 1.37a17.98 17.98 0 0 0 2.987-5.165l-3.105-2.636a4.8 4.8 0 0 1 0-7.318l3.105-2.636a17.98 17.98 0 0 0-2.987-5.165l-3.83 1.37a4.8 4.8 0 0 1-6.337-3.659l-.733-4.005a18.13 18.13 0 0 0-5.965 0l-.73 4.005a4.8 4.8 0 0 1-6.338 3.659l-3.83-1.37a17.98 17.98 0 0 0-2.987 5.165ZM13.473 20.4a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm2.4 0a3.6 3.6 0 1 0 7.2 0 3.6 3.6 0 0 0-7.2 0Z" />
  </svg>
);

export const ThemeToggleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="sun-and-moon"
    aria-hidden="true"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <circle
      className="sun"
      cx="12"
      cy="12"
      r="6"
      mask="url(#moon-mask)"
      // fill="currentColor"
    />
    <g className="sun-beams" stroke="currentColor">
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </g>
    <mask className="moon" id="moon-mask">
      <rect x="0" y="0" width="100%" height="100%" fill="white" />
      <circle cx="24" cy="10" r="6" fill="black" />
    </mask>
  </svg>
);