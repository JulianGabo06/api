import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import InputGroup from "../Filters/Category/InputGroup";

const Episode = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { air_date, name } = info;

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center mb-4">
          Episode :{" "}
          <span className="text-primary">
            {" "}
            {name === "" ? "Unknown" : name}{" "}
          </span>
        </h1>
        <div className="text-center">
          Air Date {air_date === "" ? "Unknown" : air_date}
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <div className="text-center mb-4">
            <h4 className="text-center mb-4">Pick Episodes</h4>
            <InputGroup setID={setID} name="Episode" total={51} />
          </div>
        </div>
        <div className="col-8">
          <div className="row">
            <Cards page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episode;
