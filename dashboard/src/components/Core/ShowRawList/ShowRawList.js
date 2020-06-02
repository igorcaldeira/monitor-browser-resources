import React from "react";
import ToggleItem from "components/Core/ToggleItem";
import RequestCard from "components/Core/RequestCard";
import ShowMoreList from "components/Core/ShowMoreList";

const ShowRawList = ({ objectData }) => {
  return !objectData ? null : (
    <div className="show-raw-list">
      <ShowMoreList
        count={10}
        list={Object.keys(objectData).map((propertyName) => (
          <ToggleItem key={propertyName} title={propertyName}>
            <ShowMoreList
              list={objectData[propertyName].map((rawItem) => (
                <RequestCard request={rawItem} resumed />
              ))}
              count={2}
            />
          </ToggleItem>
        ))}
      />
    </div>
  );
};

export default ShowRawList;
