import get from "./msw-utils";
import navn from "./navn.json";

export const handlers = [get("https://www.nav.no/person/dittnav-api/personalia/navn", navn)];
