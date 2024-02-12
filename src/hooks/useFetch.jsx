import { useEffect, useState } from 'react';

export const useFetch = (url, endpoint = 'http://localhost:3000') => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);

    fetch(`${endpoint}${url}`)
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [endpoint, url]);

  return {
    data,
    isLoading,
    error,
  };
};
