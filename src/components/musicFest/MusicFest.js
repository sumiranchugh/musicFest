import React from "react";
import PropTypes from "prop-types";

const MusicFest = props => {
  return <div>{props.name}</div>;
};

MusicFest.propTypes = {
  name: PropTypes.string.isRequired
};

export default MusicFest;
