import { useState, useEffect } from "react";

const useFetch = (url, initialState) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((results) =>
        setData({
          results: results,
          loading: false,
          error: null,
        })
      )
      .catch((error) =>
        setData({
          results: null,
          loading: false,
          error,
        })
      );
    console.log("rendered");
  }, [url]);

  return data;
};
export default useFetch;
