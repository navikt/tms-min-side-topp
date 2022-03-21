import { getEnvironment } from "../utils/environment";

const NAVN_URL = {
  local: "https://www.dev.nav.no/person/dittnav-api/navn",
  development: "https://person.dev.nav.no/tms-min-side-proxy/dittnav/navn",
  production: "https://person.intern.nav.no/person/dittnav-api/navn",
};

export const navnUrl = NAVN_URL[getEnvironment()];
