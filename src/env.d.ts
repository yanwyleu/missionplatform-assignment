declare namespace NodeJS {
  export interface ProcessEnv {
    MONGO_DATABASE_URI: string;
    ACCESS_TOKEN: string;
    SESSION_TOKEN: string;
    ENVRIONMENT: "development" | "production";
  }
}