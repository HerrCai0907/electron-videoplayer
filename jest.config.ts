import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  roots: ["tests"],
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
};
export default config;
