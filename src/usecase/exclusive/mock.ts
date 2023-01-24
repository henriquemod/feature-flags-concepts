export const mockAvailableFeature = async () =>
  Promise.resolve({ available: true, version: "v1" });

export const mockUnavailableFeature = async () =>
  Promise.resolve({ available: false });
