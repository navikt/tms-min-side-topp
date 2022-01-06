import get from "./msw-utils";
import navn from "./navn.json";

export const handlers = [get("https://www.dev.nav.no/person/dittnav-api/navn", navn)];
