import { useState, useEffect } from "react";
import Questions from "../components/pages/Questions";

const useFetch = (url, initialState) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((results) =>
        setData({
          results: results,
          // id: results.map((e) => e.id),
          loading: false,
          error: null,
        })
      )
      .catch((error) =>
        setData({
          results: null,
          //   id: null,
          loading: false,
          error,
        })
      );
    console.log("rendered");
  }, [url]);

  // console.log(data.results.map(e => e.id));
  return data;
};
export default useFetch;
