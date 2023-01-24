import React from "react";
import { mockFeatureWithNewVersion, mockFeatureWithOldVersion } from "./mock";

interface FlagReturn {
  available: boolean;
  version?: string;
}

export const useFlag = () => {
  const [available, setAvailable] = React.useState(false);
  const [data, setData] = React.useState<FlagReturn>();

  React.useEffect(() => {
    mockFeatureWithOldVersion().then((res) => {
      setData((prev) => ({ ...prev, ...res }));
    });
  }, []);

  const toggle = React.useCallback(() => {
    const getData = available ? mockFeatureWithOldVersion : mockFeatureWithNewVersion;

    getData().then((res: FlagReturn) => {
      setData((prev) => ({ ...prev, ...res }));
      setAvailable(!available);
    });
  }, [available]);

  return {
    available: data?.available,
    version: data?.version,
    toggle
  };
};
