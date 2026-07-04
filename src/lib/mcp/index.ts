import { defineMcp } from "@lovable.dev/mcp-js";
import listPages from "./tools/list-pages";
import getContact from "./tools/get-contact";
import listTrainingTracks from "./tools/list-training-tracks";

export default defineMcp({
  name: "urban-response-mcp",
  title: "Urban Response",
  version: "0.1.0",
  instructions:
    "Public read-only tools for the Urban Response site. Use list_pages to discover pages, get_contact for contact info, and list_training_tracks for the 5 training levels.",
  tools: [listPages, getContact, listTrainingTracks],
});
