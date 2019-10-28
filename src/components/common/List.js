import React from "react";

// label => band => fest;
const ListWrapper = (Wrap, listData) => props => {
  var list = [];

  if (listData !== undefined) {
    listData.forEach((val, index) => {
      list.push(
        <li key={index}>
          <Wrap name={val} {...props}></Wrap>
        </li>
      );
    });
  }
  return <ul>{list}</ul>;
};
export default ListWrapper;
