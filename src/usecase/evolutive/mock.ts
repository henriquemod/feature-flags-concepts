import { Version } from "./useFlag";

export const mockFeatureWithNewVersion = async (): Promise<{
  available: boolean;
  version: Version;
}> => Promise.resolve({ available: true, version: "DEVELOPMENT" });

export const mockFeatureWithOldVersion = async (): Promise<{
  available: boolean;
  version: Version;
}> => Promise.resolve({ available: true, version: "STABLE" });
