import React, { useState, Fragment } from "react";
import "./ShowMoreList.css";

const ShowMoreList = ({ list, count = 5 }) => {
  const [showUntil, changeCount] = useState(count);
  const listItems = list.slice(0, showUntil);
  const moreToShow = Math.min(list.length - listItems.length, count);
  return (
    <>
      {listItems.slice(0, showUntil).map((comp, i) => (
        <Fragment key={i}>{comp}</Fragment>
      ))}
      <div
        onClick={() => {
          changeCount(showUntil + moreToShow);
        }}
      >
        {moreToShow > 0 && <center className="show-more-link">show {moreToShow} more items</center>}
      </div>
    </>
  );
};

export default ShowMoreList;
