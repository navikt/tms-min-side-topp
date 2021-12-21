function getEnvironment() {
  if (process.env.NODE_ENV === "production") {
    return "production";
  }
  return "development";
}

const NAVN_URL = {
  development: "https://www.nav.no/person/dittnav-api/personalia/navn",
  production: "https://www.dev.nav.no/person/dittnav-api/personalia/navn",
};

export const navnUrl = NAVN_URL[getEnvironment()];
