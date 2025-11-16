import qrcode from "qrcode";

export default defineEventHandler(async (event) => {
  setResponseHeader(event, "Content-Type", "image/svg+xml");
  return await qrcode.toString(
    "http://" +
      (process.env?.VERCEL_PROJECT_PRODUCTION_URL || "localhost") +
      "?utm_source=website",
    { type: "svg" },
  );
});
