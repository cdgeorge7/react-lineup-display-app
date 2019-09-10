import React, { useState, useEffect } from "react";
import LineupGroups from "./LineupGroups";
import axios from "axios";

export default function DataFetcher(props) {
  const [data, setNewData] = useState({ lineups: [] });
  const [oldData, setOldData] = useState(data);
  const [hasError, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errStr, setErrstr] = useState(null);
  let calls = 0;

  const LINEUPS_URL = "http://localhost:5000/lineups";
  async function fetchData() {
    await axios
      .get(LINEUPS_URL)
      .then(resJSON => {
        /* console.log("fetched"); */
        /* setOldData({ oldData: data.newData }); */
        console.log("calls: " + calls);
        console.log("parent data");
        console.log(data);
        console.log("parent oldData");
        console.log(oldData);
        setNewData({
          lineups: JSON.parse(resJSON.data).lineups
        });
        setOldData(data);
        calls += 1;
        setLoading(false);
        if (props.refresh) {
          setTimeout(fetchData, props.refreshRate);
        }
      })
      .catch(err => {
        console.log(err);
        setErrstr(err);
        setError(true);
      });
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return hasError ? (
    <div>error {String(errStr)}</div>
  ) : loading ? (
    <div>Loading...</div>
  ) : (
    <LineupGroups data={data} oldData={oldData} />
  );
}
