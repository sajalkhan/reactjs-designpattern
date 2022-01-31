import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetUser = URL => {
  const [originalData, setOriginalData] = useState({});
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const response = await axios.get(URL);
      setOriginalData(response.data);
      setData(response.data);
    })();
  }, [URL]);

  return { data, setData, originalData, setOriginalData };
};
