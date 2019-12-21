import React, { useState } from "react";
import Searcher from "./components/searchBar";
import Search from "./components/search";
import "./App.css";
import axios from "axios";

const App = () => {
  const [search, setSearch] = useState([]);

  const fetchData = async e => {
    const search = e.target.elements.search.value;
    if (search === "") {
      return;
    }
    e.preventDefault();
    await axios
      .get(
        `https://geodata.nationaalgeoregister.nl/locatieserver/v3/suggest?fq=type:adres&q=${search}&start=0&rows=20&fq=*:*`
      )
      .then(response => {
        setSearch(response.data.response.docs);
      });
  };
  return (
    <div>
      <h1 className="center">Find Address</h1>
      <Searcher getSearch={fetchData} />
      <Search rows={search} />
    </div>
  );
};

export default App;
