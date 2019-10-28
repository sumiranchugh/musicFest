import React, { useState, useEffect } from "react";
import "./App.css";
import MusicLabel from "../label/MusicLabel";
import ListWrapper from "../common/List";
import data from "../../api.json";

const App = props => {
  const [labels, setLabels] = useState(new Map());
  const [fests, setFests] = useState(new Map());
  // console.log(data);

  useEffect(() => {
    const apiCall = Promise.resolve(data);
    const labelMap = new Map();
    const bandFestMap = new Map();
    apiCall.then(data => {
      data.forEach(fests => {
        const { name: festName, bands } = fests;
        mapData(bands, labelMap, bandFestMap, festName);
      });
      setLabels(labelMap);
      setFests(bandFestMap);
    });
  }, []);
  const MusicLabels = ListWrapper(MusicLabel, [...labels.keys()]);

  return (
    <div className="App">
      <header className="App-header">
        <MusicLabels fests={fests} labels={labels} />
      </header>
    </div>
  );
};

function mapData(bands, labelMap, bandFestMap, festName) {
  bands.forEach(band => {
    const { name: bandName, recordLabel } = band;
    var bandsList = new Set();
    var festsList = new Set();
    if (labelMap.get(recordLabel) !== undefined) {
      bandsList = labelMap.get(recordLabel);
    }
    if (bandFestMap.get(bandName) !== undefined) {
      festsList = bandFestMap.get(bandName);
    }
    bandsList.add(bandName);
    festsList.add(festName);
    labelMap.set(recordLabel, bandsList);
    bandFestMap.set(bandName, festsList);
  });
}

export default App;
