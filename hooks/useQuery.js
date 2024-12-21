import { useCallback, useEffect, useState } from "react";

export const useQuery = ({ prefixUrl = "" } = {}) => {
  const [data, setData] = useState({
    data: null,
    isLoading: true,
    isError: false,
  });

  const fetchData = useCallback(async ({ url = "", method = "GET" }) => {
    try {
      const response = await fetch(url, { method });
      const result = await response.json();
      console.log("result", result);
      setData((prevState) => ({
        ...prevState,
        data: result?.data,
        isLoading: false,
      }));
    } catch (error) {
      setData((prevState) => ({
        ...prevState,
        isError: false,
      }));
    }
  }, []);

  useEffect(() => {
    if (prefixUrl) {
      console.log("kesini");
      fetchData({ url: prefixUrl });
    }
  }, []);

  return {
    ...data,
  };
};
