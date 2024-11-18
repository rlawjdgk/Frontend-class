import { NextApiRequest, NextApiResponse } from "next";

const handler = async (reqL: NextApiRequest, res: NextApiResponse) => {
  try {
    await res.revalidate("/");
    return res.json({ revalidate: true });
  } catch (err) {
    console.error(err);
    res.status(500).send("Revailidation Failed");
  }
};

export default handler;
