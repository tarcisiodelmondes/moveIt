import { NextApiRequest, NextApiResponse } from "next";
import { getScreenshot } from "./_lib/chromiun";
import { getHtml } from "./_lib/ThumbTwitterTemplate";

const isDev = !process.env.AWS_REGION;

export default async function Thumbnail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const query = req.query;

    const level = String(query.level);
    const currentExperience = String(query.currentExperience);
    const completedChallenges = String(query.completedChallenges);

    const html = getHtml({ level, currentExperience, completedChallenges });

    const file = await getScreenshot(html, isDev);

    res.setHeader("Content-Type", "image/png");
    res.setHeader(
      "Cache-Control",
      "public, immutable, no-transform, s-maxage=31536000, max-age=31536000"
    );
    return res.end(file);
  } catch (error) {
    console.error(error);

    return res.status(500).send("Internal server error");
  }
}
