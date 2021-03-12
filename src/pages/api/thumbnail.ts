import { NextApiRequest, NextApiResponse } from "next";
import { getScreenshot } from "./_lib/chromiun";
import { getHtml } from "./_lib/ThumbTwitterTemplate";

const isDev = !process.env.AWS_REGION;

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  try {
    const query = req.query;

    const level = String(query.level);
    const currentExperience = String(query.currentExperience);
    const challengesCompleted = String(query.challengesCompleted);

    const html = getHtml({ level, currentExperience, challengesCompleted });

    const file = await getScreenshot(html, isDev);

    res.setHeader("Content-Type", "image/png");
    res.setHeader(
      "Cache-Control",
      "public, immutable, no-transform, s-maxage=31536000, max-age=31536000"
    );

    return res.end(file);
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Internal Error</h1><p>Sorry, there was a problem</p>");
    console.error(error);
  }
};
