import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetchCsvData = () => {
  const [shouldRefill, setShouldRefill] = useState<boolean | null>(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchCSVData();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const fetchCSVData = () => {
    const csvUrl =
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vSwkar4zSogEqa_Na2b8ksz9U2nA-T-3KB3FDrbJ7LUVe1iFUqaLFkcmRdKoj1uHBoTM5482Frq6HJ6/pub?gid=0&single=true&output=csv';

    axios
      .get(csvUrl)
      .then((response) => {
        setShouldRefill(response.data === 'Refill');
      })
      .catch((error) => {
        setIsError(true);
        console.error('Error fetching CSV data:', error);
      });
  };

  return { shouldRefill, isError };
};
