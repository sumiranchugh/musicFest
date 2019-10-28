import React from "react";
import PropTypes from "prop-types";
import Band from "../band/Band";
import ListWrapper from "../common/List";

const MusicLabel = props => {
  const Bands = ListWrapper(Band, props.labels.get(props.name));
  const { labels, fests } = props;
  return (
    <div>
      <h4>{props.name}</h4>
      <Bands labels={labels} fests={fests} />
    </div>
  );
};

MusicLabel.propTypes = {
  name: PropTypes.string.isRequired
};

export default MusicLabel;
