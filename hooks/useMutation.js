import { useCallback, useEffect, useState } from "react";

export const useMutation = () => {
  const mutation = useCallback(
    async ({ url = "", method = "POST", payload = {} } = {}) => {
      console.log("payload", payload);
      try {
        const response = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        const result = await response.json();
        return result;
      } catch (error) {
        return error;
      }
    },
    []
  );

  return {
    function: {
      mutation,
    },
  };
};
