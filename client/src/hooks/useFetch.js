import { useState, useEffect } from "react";

const useFetch = (url, initialState) => {
  const [data, setData] = useState(initialState);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((results) => setData({ results, id: null, loading: false, error: null }))
      .catch((error) => setData({ results: null,id:null, loading: false, error }));

  //     let i = 0

  
  // data.map(n => {
  //         n['id'] = i;
  //         i++; 
  //     });
  //     console.log(data);
  }, [url]);
  return data;
};
export default useFetch;
