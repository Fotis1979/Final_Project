import { useState, useEffect } from "react";


const useFetch = (url) => {
  const [data, setData] = useState();
  
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((results) =>  setData({results: results, id: results.map(e => e.id), loading: false, error: null }))
      .catch((error) => setData({ results: null,id:null, loading: false, error }));


}, [url]);


// console.log(data.results.map(e => e.id));
  return data;
};
export default useFetch;
