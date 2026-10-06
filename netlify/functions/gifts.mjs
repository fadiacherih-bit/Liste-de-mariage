import { getStore } from "@netlify/blobs";

const SEED = [
  ["Air fryer Ninja", "Ninja Max Pro AF180EU — 6,2 L"],
  ["Cookeo Moulinex Noir", ""],
  ["Défroisseur", ""],
  ["Centrale vapeur Philips Série 6000", "8 bars, noir/doré, 1,8 L"],
  ["Micro-ondes noir", ""],
  ["Bouilloire noire", ""],
  ["Machine à café noire", ""],
  ["Machine à raclette", ""],
  ["Aspirateur sans fil DREAME R20", ""],
  ["Horloge avec adhan Adhani", "Noire et dorée"],
  ["Moule cubes Guy Demarle", ""],
  ["Moule gâteaux Guy Demarle", ""],
  ["Moule tarte Guy Demarle", ""],
  ["Robot pied mixeur Braun MultiQuick 5 Pro", "MQ 55755 M"],
  ["Coupes H&M Home", "2 lots de 4"],
  ["Plateau de service H&M", "Marbre marron"],
].map(([name, desc], i) => ({ id: "g" + (i + 1), name, desc, link: "", price: "", done: false }));

const clean = (s, n) => String(s ?? "").trim().slice(0, n);

function sanitize(items) {
  if (!Array.isArray(items)) return null;
  return items.slice(0, 300).map((it, i) => ({
    id: clean(it.id, 40) || "g" + Date.now() + i,
    name: clean(it.name, 120),
    desc: clean(it.desc, 200),
    link: /^https?:\/\//i.test(it.link) ? clean(it.link, 500) : "",
    price: clean(it.price, 30),
    done: !!it.done,
  })).filter((it) => it.name);
}

export default async (req) => {
  const store = getStore({ name: "mariage", consistency: "strong" });
  const pwd = Netlify.env.get("ADMIN_PASSWORD");
  const isAdmin = !!pwd && req.headers.get("x-admin-password") === pwd;
  const headers = { "Cache-Control": "no-store" };

  if (req.method === "GET") {
    const data = await store.get("liste", { type: "json" });
    return Response.json({ items: data?.items ?? SEED, admin: isAdmin }, { headers });
  }

  if (req.method === "PUT") {
    if (!isAdmin) return new Response("Mot de passe incorrect", { status: 401 });
    const body = await req.json().catch(() => null);
    const items = sanitize(body?.items);
    if (!items) return new Response("Données invalides", { status: 400 });
    await store.setJSON("liste", { items });
    return Response.json({ items }, { headers });
  }

  return new Response("Méthode non autorisée", { status: 405 });
};

export const config = { path: "/api/gifts" };
