import { getEnvironment } from "../utils/environment";

const NAVN_URL = {
  local: "https://www.dev.nav.no/person/dittnav-api/navn",
  development: "https://www.dev.nav.no/person/dittnav-api/navn",
  production: "https://www.dev.nav.no/person/dittnav-api/navn",
};

export const navnUrl = NAVN_URL[getEnvironment()];
