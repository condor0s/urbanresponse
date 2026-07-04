import { defineTool } from "@lovable.dev/mcp-js";

const TRACKS = [
  { level: 1, name: "Awareness", focus: "Παρατήρηση και situational awareness στην καθημερινότητα." },
  { level: 2, name: "Assessment", focus: "Εκτίμηση κατάστασης, OODA Loop, Cooper's Color Code." },
  { level: 3, name: "De-escalation", focus: "Λεκτική αποκλιμάκωση και διαχείριση έντασης." },
  { level: 4, name: "Decision", focus: "Λήψη απόφασης υπό πίεση χωρίς πανικό." },
  { level: 5, name: "Physical Response", focus: "Βασική φυσική αντίδραση για αυτοπροστασία." },
];

export default defineTool({
  name: "list_training_tracks",
  title: "List training tracks",
  description: "List the 5 progressive training levels of the Urban Response methodology.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(TRACKS, null, 2) }],
    structuredContent: { tracks: TRACKS },
  }),
});
