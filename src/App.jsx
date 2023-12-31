import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";

import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episode from "./components/Pages/Episode";
import Location from "./components/Pages/Location";
import CardDetails from "./components/Cards/CardDetails";

function App(){
  return(
    <Router>
    <div className="App">
      <Navbar />
    </div>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<CardDetails/>} />

      <Route path="/episode" element={<Episode />} />
      <Route path="/episodes/:id" element={<CardDetails/>} />

      <Route path="/location" element={<Location />} />
      <Route path="/location/:id" element={<CardDetails/>} />
    </Routes>
  </Router>
    
  )
}

function Home() {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  //console.log(fetchedData)
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-4">Characters</h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
          <Filters 
            setGender={setGender}
            setStatus={setStatus} 
            setSpecies={setSpecies}
            setPageNumber={setPageNumber} 
            
          />
          <div className="col-8">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default App;
