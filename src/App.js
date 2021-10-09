import { useEffect, useState } from "react";
import AppHeader from "./components/Header";
import AppMap from "./components/Map";
import "./assets/css/style.css";

const initialState = {
  searchValue: "",
  ip: "",
  isp: "",
  location: {},
};

function App() {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (value) => {
    setState((prev) => ({ ...prev, searchValue: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAPIData(state.searchValue);
  };

  const fetchAPIData = async (value) => {
    setLoading(true);
    let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/;
    let domainRegex =
      /[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;
    let ip = value?.match(ipRegex);
    let domain = value?.match(domainRegex);

    return await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${
        process.env.REACT_APP_API_KEY
      }&ipAddress=${ip || ""}&domain=${domain || ""}`
    )
      .then((res) => res.json())
      .then((data) => {
        setState((prev) => ({
          ...prev,
          ...data,
          searchValue: value ? value : data.ip,
        }));
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchAPIData();

    return () => {
      setState(initialState);
    };
  }, []);

  return (
    <>
      <AppHeader
        loading={loading}
        state={state}
        onChange={handleChange}
        onSearch={handleSearch}
      />
      <AppMap location={state.location} />
    </>
  );
}

export default App;
