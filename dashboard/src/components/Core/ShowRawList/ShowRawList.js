import React from "react";
import ToggleItem from "components/Core/ToggleItem";
import RequestCard from "components/Core/RequestCard";
import ShowMoreList from "components/Core/ShowMoreList";

const ShowRawList = ({ objectData, count }) => {
  return !objectData ? null : (
    <div className="show-raw-list">
      <ShowMoreList
        count={10}
        list={Object.keys(objectData)
          .sort((a, b) => objectData[b].length - objectData[a].length)
          .map((propertyName) => (
            <ToggleItem key={propertyName} title={propertyName} badge={objectData[propertyName].length}>
              <ShowMoreList
                list={objectData[propertyName].map((rawItem) => (
                  <RequestCard request={rawItem} resumed />
                ))}
                count={count || 2}
              />
            </ToggleItem>
          ))}
      />
    </div>
  );
};

export default ShowRawList;
