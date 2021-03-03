import { NextApiRequest, NextApiResponse } from "next";

export default function Thumbnail(req:NextApiRequest, res:NextApiResponse) {
    return res.json({
        ok: "teste"
    })}