import React from "react";

export type Version = "STABLE" | "DEVELOPMENT" | "NOT_AVAILABLE";

export const useFlag = (enabled = false) => {
  const [available, setAvailable] = React.useState(enabled);
  const [version, setVersion] = React.useState<Version>("NOT_AVAILABLE");

  React.useEffect(() => {
    if (!available) {
      setVersion("NOT_AVAILABLE");
    } else {
      setVersion("STABLE");
    }
  }, [available]);

  const handleChangeVersion = (version: Version) => setVersion(version);

  const toggleEnabled = React.useCallback(() => {
    setAvailable((prev) => !prev);
  }, []);

  return {
    available,
    version,
    handleChangeVersion,
    toggleEnabled,
  };
};
