import { defineTool } from "@lovable.dev/mcp-js";

const CONTACT = {
  organization: "Urban Response",
  instructor: "Σταύρος Μπαρούτας",
  role: "Founder & Methodology Developer",
  location: "Καλαμαριά, Θεσσαλονίκη",
  website: "https://urbanresponse.gr",
};

export default defineTool({
  name: "get_contact",
  title: "Get contact info",
  description: "Return public contact information for Urban Response (instructor, location, website).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(CONTACT, null, 2) }],
    structuredContent: CONTACT,
  }),
});
