import { useRef, useState, useEffect } from 'react';

export const useFetch = (url = '', options = { method: 'GET', data: {} }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const userOptions = useRef(options);

  useEffect(() => {
    const controller = new AbortController();
    const fetchOptions = {
      ...userOptions,
      signal: controller.signal,
      headers: { 'Content-Type': 'application/json' },
    };

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, fetchOptions);
        if (!response.ok) {
          throw new Error();
        } else {
          let json = await response.json();
          setLoading(false);
          setError(null);
          setData(json);
        }
      } catch (error) {
        if (error.name === 'AbortError')
          console.log('the fetch request was aborted');
        setLoading(false);
        setError("Couldn't fetch the data");
        setData(null);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url, userOptions]);

  return { data, error, loading };
};
