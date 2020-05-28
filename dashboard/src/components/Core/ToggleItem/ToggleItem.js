import React, { useState } from "react";
import { Badge } from "shards-react";
import { typeTheme } from "utils/lib";
import "./ToggleItem.css";

const ToggleItem = ({ title, badge, children }) => {
  const [visi, setVisi] = useState(false);

  return (
    <div className="toggle-item">
      <div className="header" onClick={() => setVisi(!visi)}>
        <span className="title">{title}</span>
        <span className="badge-special"> {badge && <Badge>{badge}</Badge>}</span>
        <span className="plus">{visi ? "-" : "+"}</span>
      </div>
      {visi && <div>{children}</div>}
    </div>
  );
};

export default ToggleItem;
