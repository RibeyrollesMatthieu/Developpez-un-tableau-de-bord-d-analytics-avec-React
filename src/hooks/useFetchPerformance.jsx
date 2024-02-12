import { useFetch } from '@/hooks/useFetch';
import { useEffect, useState } from 'react';

export const useFetchPerformance = (userId) => {
  const [data, setData] = useState(null);
  const { data: baseData, error, isLoading } = useFetch(`/user/${userId}/performance`);

  useEffect(() => {
    if (isLoading || !baseData || error) return;

    setData(
      baseData.data.data.map((element) => {
        const { value, kind } = element;

        return {
          value,
          kind: baseData.data.kind[kind],
        };
      })
    );
  }, [baseData, error, isLoading]);

  return {
    data,
    error,
    isLoading,
  };
};
