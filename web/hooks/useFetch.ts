import { http } from "@/lib/http";
import { useEffect, useState } from "react";

export const useFetch = <T>(URL: string, opts: any[]) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    setLoading(true);
    http
      .get<T>(URL)
      .then((res) => mounted && setData(res.data))
      .catch((err) => mounted && setError(err))
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, opts);

  return { data, loading, error };
};
