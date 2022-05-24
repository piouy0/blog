import React from "react";

interface Props {}

const ArrowIcon: React.FC<Props> = () => {
  return (
    <svg xmlns="https://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
      <path
        fill="#767676"
        fillRule="nonzero"
        d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"
      />
    </svg>
  );
};

export default ArrowIcon;
