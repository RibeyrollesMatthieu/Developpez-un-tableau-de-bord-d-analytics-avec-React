import { useFetch } from '@/hooks/useFetch';
import { useEffect, useState } from 'react';

export const useFetchAverageSessions = (userId) => {
  const [data, setData] = useState(null);
  const { data: baseData, error, isLoading } = useFetch(`/user/${userId}/average-sessions`);

  useEffect(() => {
    if (isLoading || !baseData?.data?.sessions || error) return;

    setData(baseData.data.sessions);
  }, [baseData, error, isLoading]);

  return {
    data,
    error,
    isLoading,
  };
};
