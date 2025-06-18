import React from "react";

const ReturnButton = (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="21" cy="21" r="21" fill="#ECEFF1"></circle>
    <line
      x1="23.5507"
      y1="28.4649"
      x2="16.0341"
      y2="20.9483"
      stroke="#9EA3A8"
      stroke-width="2"
    ></line>
    <line
      x1="23.7071"
      y1="14.7071"
      x2="16.7071"
      y2="21.7071"
      stroke="#9EA3A8"
      stroke-width="2"
    ></line>
  </svg>
);
const SortArrow = (
  <svg
    height="7px"
    width="16px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke=""
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        fill="#45B0E6"
        d="M8 1.25a2.101 2.101 0 00-1.785.996l.64.392-.642-.388-5.675 9.373-.006.01a2.065 2.065 0 00.751 2.832c.314.183.67.281 1.034.285h11.366a2.101 2.101 0 001.791-1.045 2.064 2.064 0 00-.006-2.072L9.788 2.25l-.003-.004A2.084 2.084 0 008 1.25z"
      ></path>
    </g>
  </svg>
);

const Search = (
  <svg
    width="100%"
    height="100%"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="10"
      cy="10"
      r="6"
      stroke="#64C3F4"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.5 14.5L19 19"
      stroke="#64C3F4"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const Cross = (
  <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 8L16 16"
      stroke="#64C3F4"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 8L8 16"
      stroke="#64C3F4"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const DeleteSearchItem = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.2426 7.75827L7.75736 16.2435M16.2426 16.2435L7.75736 7.75827"
      stroke="#AAAAAD"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);
const Download = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17M12 4V16M12 16L17 11M12 16L7 11"
      stroke="#45B0E6"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const Update = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 11.0002C19.7554 9.24041 18.9391 7.60985 17.6766 6.35969C16.4142 5.10953 14.7758 4.30911 13.0137 4.08175C11.2516 3.85438 9.46362 4.21268 7.9252 5.10144C6.38678 5.9902 5.18325 7.36013 4.5 9.00019M4 5.00019V9.00019H8M4 13.0002C4.24456 14.76 5.06093 16.3905 6.32336 17.6407C7.58579 18.8909 9.22424 19.6913 10.9863 19.9186C12.7484 20.146 14.5364 19.7877 16.0748 18.8989C17.6132 18.0102 18.8168 16.6403 19.5 15.0002M20 19.0002V15.0002H16"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default {
  /** Кнопка назад */
  ReturnButton,
  SortArrow,
  Search,
  /** Иконка удаления элемента фильтра с поиском */
  DeleteSearchItem,
  /** Крест */
  Cross,
  Download,
  Update,
};
