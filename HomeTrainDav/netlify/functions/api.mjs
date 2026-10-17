import { getStore } from "@netlify/blobs";
import { timingSafeEqual } from "node:crypto";

const USERS = ["David", "Isabelle", "Daniel", "Raphaël"];
const no = (c) => new Response("", { status: c });

export default async (req) => {
  if (req.method !== "POST") return no(405);
  let b;
  try { b = await req.json(); } catch { return no(400); }

  const secret = Buffer.from(process.env.APP_PASSWORD || "");
  const given = Buffer.from(String(b.pw || ""));
  if (!secret.length || secret.length !== given.length || !timingSafeEqual(secret, given)) {
    await new Promise((r) => setTimeout(r, 1000));
    return no(401);
  }
  const i = USERS.indexOf(b.user);
  if (i < 0) return no(400);

  const store = getStore("hometraindav");
  const key = "user-" + i;
  if (b.op === "set") {
    if (!b.data || typeof b.data !== "object") return no(400);
    await store.setJSON(key, b.data);
    return Response.json({ ok: true });
  }
  return Response.json({ data: await store.get(key, { type: "json" }) });
};

export const config = { path: "/api" };
