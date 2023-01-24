export const mockFeatureWithNewVersion = async () =>
  Promise.resolve({ available: true, version: "v2" });

export const mockFeatureWithOldVersion = async () =>
  Promise.resolve({ available: true, version: "v1" });
