import React from "react";
import PropTypes from "prop-types";
import ListWrapper from "../common/List";
import MusicFest from "../musicFest/MusicFest";

const propTypes = {
  name: PropTypes.string.isRequired
};

function Band(props) {
  const Fests = ListWrapper(MusicFest, props.fests.get(props.name));
  const { labels, fests } = props;
  return (
    <div>
      <h5>{props.name}</h5>
      <Fests labels={labels} fests={fests} />
    </div>
  );
}

Band.propTypes = propTypes;

export default Band;
