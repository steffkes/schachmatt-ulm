import { defineEventHandler } from "h3"; // needed for test
import { ofetch } from "ofetch";

export const extract = (content) => {
  return { registered: Object.values(content["data"]).length };
};

export default defineEventHandler(async (event) => {
  try {
    const content = await ofetch(
      "https://my.raceresult.com/313906/RRPublish/data/list",
      {
        query: {
          key: "5af851eb0259b1c543aeba7da178780e",
          listname: "02_Teilnehmerlisten|Teilnehmer_Schanzenlauf",
          contest: 1,
        },
        timeout: 1000,
      },
    );

    return extract(content);
  } catch (error) {
    console.error({ error });
    return { registered: null };
  }
});
