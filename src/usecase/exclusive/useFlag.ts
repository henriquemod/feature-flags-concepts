import React from "react";
import { mockAvailableFeature, mockUnavailableFeature } from "./mock";

export type Version = "STABLE" | "DEVELOPMENT" | "NOT_AVAILABLE";

interface FlagReturn {
  available: boolean;
  version?: string;
}

export const useFlag = () => {
  const [available, setAvailable] = React.useState(false);
  const [data, setData] = React.useState<FlagReturn>();

  React.useEffect(() => {
    mockUnavailableFeature().then((res) => {
      setData((prev) => ({ ...prev, ...res }));
    });
  }, []);

  const toggle = React.useCallback(() => {
    const getData = !available ? mockAvailableFeature : mockUnavailableFeature;

    getData().then((res: FlagReturn) => {
      const isAvailable = !!available;
      setData((prev) => ({ ...prev, ...res }));
      setAvailable(!isAvailable);
    });
  }, [available]);

  return {
    available: data?.available,
    version: data?.version,
    toggle,
  };
};
