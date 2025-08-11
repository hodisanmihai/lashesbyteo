import { type SchemaTypeDefinition } from "sanity";
import galerie from "./galerie";
import preturi from "./preturi";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [preturi, galerie],
};
