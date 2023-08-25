import React from "react";
import Gender from "../Filters/Category/Gender";
import Status from "../Filters/Category/Status";
import Species from "../Filters/Category/Species";

const Filters = ({setStatus, setPageNumber, setGender, setSpecies}) => {
  let clear = () =>{
    setStatus=("")
    setPageNumber=("")
    setGender=("")
    setSpecies=("")
    window.location.reload(false)
  }
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-4">Filters</div>
      <div onClick={clear} style={{ cursor: "pointer" }} className="text-center text-primary">
        Clear FIlters
      </div>

      <div className="accordion" id="accordionExample">
        <Gender setPageNumber={setPageNumber} setGender={setGender} />
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
      </div>
    </div>
  );
};

export default Filters;
