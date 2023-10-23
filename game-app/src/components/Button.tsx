import React from "react";

interface Props {
  onClick: () => void;
}

const Button = ({ onClick }: Props) => {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      Primary
    </button>
  );
};

export default Button;
