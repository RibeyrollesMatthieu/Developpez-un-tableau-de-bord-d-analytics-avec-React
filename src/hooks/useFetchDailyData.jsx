import { useFetch } from '@/hooks/useFetch';
import { useEffect, useState } from 'react';

export const useFetchDailyData = (userId) => {
  const [data, setData] = useState(null);
  const { data: baseData, error, isLoading } = useFetch(`/user/${userId}/activity`);

  useEffect(() => {
    if (isLoading || !baseData || error) return;

    setData(baseData.data.sessions);
  }, [baseData, error, isLoading]);

  return {
    data,
    error,
    isLoading,
  };
};
