import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        const res = await fetch(url);
        const apiData = await res.json();
        setData(apiData);
        setLoading(false);
      } catch (errors) {
        setLoading(false);
        setError(errors);
      }
    };
    fetchResource();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
