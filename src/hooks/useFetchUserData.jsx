import { useFetch } from '@/hooks/useFetch';
import { useEffect, useState } from 'react';

export const useFetchUserData = (userId) => {
  const [data, setData] = useState(null);
  const { data: baseData, error, isLoading } = useFetch(`/user/${userId}`);

  useEffect(() => {
    if (isLoading || !baseData || error) return;

    const newData = baseData.data;
    if (!newData.score) {
      newData.score = newData.todayScore;
      delete newData.todayScore;
    }

    setData(newData);
  }, [baseData, error, isLoading]);

  return {
    data,
    error,
    isLoading,
  };
};
