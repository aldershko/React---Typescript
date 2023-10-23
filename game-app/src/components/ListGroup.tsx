import React from "react";

const ListGroup = () => {
  const items = ["New York", "Kottayam", "Peruva", "Kidangoor", "Australia"];

  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
