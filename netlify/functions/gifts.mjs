import { getStore } from "@netlify/blobs";

const SEED = [
 {
  "id": "g1",
  "name": "Air fryer",
  "desc": "Ninja, modèle : Ninja Max pro AF180EU — 6,2 L",
  "link": "https://www.sharkninja.fr/air-fryer-ninja-max-pro-6.2l-6-en-1-cuivre/AF180EUBRN.html?utm_source=chatgpt.com&dwvar_AF180EUBRN_color=060000",
  "price": "",
  "photo": "/photos/g1.jpg",
  "done": false
 },
 {
  "id": "g2",
  "name": "Cookeo Moulinex",
  "desc": "Noir",
  "link": "https://www.e.leclerc/fp/moulinex-cookeo-multicuiseur-6l-180-recettes-extra-crisp-3045387296124?et_keyword=&et_campaign=20393113563&et_device=m&et_matchtype=&utm_source=google&utm_medium=cpc&utm_campaign=FR/PMAX/SUE/High-Tech/Electromenager/Others&gad_source=1&gad_campaignid=17943484466&gbraid=0AAAAADJL7wMG--RIW1nPEtVONLczd0Dc2&gclid=CjwKCAjwnvTUBhBoEiwAZNDxZzVvQ1xm4Y4KHqm5ZVf3qWjRXorhp-QvipOENsJTR_eNKxj4VKfZXhoCf8cQAvD_BwE",
  "price": "",
  "photo": "/photos/g2.jpg",
  "done": false
 },
 {
  "id": "g3",
  "name": "Défroisseur",
  "desc": "",
  "link": "",
  "price": "",
  "photo": "",
  "done": false
 },
 {
  "id": "g4",
  "name": "Centrale vapeur",
  "desc": "Série 6000 Centrale Vapeur Philips - Iron 8 bars Noir/Doré 1.8L 4.6",
  "link": "",
  "price": "",
  "photo": "/photos/g4.jpg",
  "done": false
 },
 {
  "id": "g5",
  "name": "Micro-ondes",
  "desc": "Noir",
  "link": "",
  "price": "",
  "photo": "",
  "done": false
 },
 {
  "id": "g6",
  "name": "Bouilloire",
  "desc": "Noire",
  "link": "",
  "price": "",
  "photo": "",
  "done": false
 },
 {
  "id": "g7",
  "name": "Machine à café",
  "desc": "Noire",
  "link": "",
  "price": "",
  "photo": "",
  "done": false
 },
 {
  "id": "g8",
  "name": "Machine à raclette",
  "desc": "",
  "link": "",
  "price": "",
  "photo": "",
  "done": false
 },
 {
  "id": "g9",
  "name": "Aspirateur sans fils",
  "desc": "DREAME R20",
  "link": "https://www.darty.com/nav/achat/petit_electromenager/aspirateur-balai_main/aspirateur_balai/dreame_r20.html",
  "price": "",
  "photo": "/photos/g9.jpg",
  "done": false
 },
 {
  "id": "g10",
  "name": "Horloge avec adhan",
  "desc": "Adhani - noire et dorée",
  "link": "https://adhani.fr/products/horloge-adhani-noir-et-or?srsltid=AU7gw4UiU4NVKsC1VZrjaHfRsOumn7QwS6vWTPd0ApzltpmpJf2rxgMZ",
  "price": "",
  "photo": "/photos/g10.jpg",
  "done": false
 },
 {
  "id": "g11",
  "name": "Moule cubes",
  "desc": "Guy demarle",
  "link": "https://boutique.guydemarle.com/moule-en-silicone/4423-moule-en-silicone-cubicube-ohra.html",
  "price": "",
  "photo": "/photos/g11.jpg",
  "done": false
 },
 {
  "id": "g12",
  "name": "Moule gâteaux",
  "desc": "Guy Demarle",
  "link": "https://boutique.guydemarle.com/moule-en-silicone/4420-moule-layer-cake-24-cm.html",
  "price": "",
  "photo": "/photos/g12.jpg",
  "done": false
 },
 {
  "id": "g13",
  "name": "Moule tarte",
  "desc": "Guy Demarle",
  "link": "https://boutique.guydemarle.com/moule-en-silicone/4421-moule-tarte-cannelee.html",
  "price": "",
  "photo": "/photos/g13.jpg",
  "done": false
 },
 {
  "id": "g14",
  "name": "Robot - pied mixeur",
  "desc": "Braun - MultiQuick 5 Pro MQ 55755 M",
  "link": "https://www.braunhousehold.com/fr-fr/p/multiquick-5-pro-pied-mixeur-multiquick-5-pro-mq-55755-m/MQ55755M.html?pid=0X22111502&utm_source=google&utm_medium=cpc&utm_campaign=FR_BR_hq_CTS_all-all_performance-max_googleads_STO-PMC.AllProducts__purchase_AO&gad_source=1&gad_campaignid=17181672433&gbraid=0AAAAAoywkncgAsCj6tJkORZX17g1vpqZM&gclid=Cj0KCQjw5vLVBhCiARIsAD56SFJkXtnWiMH3CEpGu0TcAyS2LXa-gZiLbEftc3rhUryGv_YxRE0xOSsaAnWAEALw_wcB",
  "price": "",
  "photo": "/photos/g14.jpg",
  "done": false
 },
 {
  "id": "g15",
  "name": "Coupes",
  "desc": "H&M Home - 2 lots de 4",
  "link": "https://www2.hm.com/fr_fr/productpage.1306523001.html",
  "price": "",
  "photo": "/photos/g15.jpg",
  "done": false
 },
 {
  "id": "g16",
  "name": "Plateau de service",
  "desc": "Marbre marron - H&M",
  "link": "https://www2.hm.com/fr_fr/productpage.1336164001.html",
  "price": "",
  "photo": "/photos/g16.jpg",
  "done": false
 }
];

const clean = (s, n) => String(s ?? "").trim().slice(0, n);
const PHOTO_OK = /^\/(photos\/[\w.-]+|api\/photo\?id=[\w-]+(&v=\d+)?)$/;

function sanitize(items) {
  if (!Array.isArray(items)) return null;
  return items.slice(0, 300).map((it, i) => ({
    id: clean(it.id, 40).replace(/[^\w-]/g, "") || "g" + Date.now() + i,
    name: clean(it.name, 120),
    desc: clean(it.desc, 200),
    link: /^https?:\/\//i.test(it.link) ? clean(it.link, 1000) : "",
    price: clean(it.price, 30),
    photo: PHOTO_OK.test(it.photo || "") ? it.photo : "",
    done: !!it.done,
  })).filter((it) => it.name);
}

export default async (req) => {
  const url = new URL(req.url);
  const pwd = Netlify.env.get("ADMIN_PASSWORD");
  const isAdmin = !!pwd && req.headers.get("x-admin-password") === pwd;
  const noStore = { "Cache-Control": "no-store" };

  if (url.pathname === "/api/photo") {
    const photos = getStore({ name: "photos", consistency: "strong" });
    const id = url.searchParams.get("id") || "";
    if (!/^[\w-]{1,60}$/.test(id)) return new Response("Identifiant invalide", { status: 400 });
    if (req.method === "GET") {
      const img = await photos.get(id, { type: "arrayBuffer" });
      if (!img) return new Response("Introuvable", { status: 404 });
      return new Response(img, { headers: { "Content-Type": "image/jpeg", "Cache-Control": "public, max-age=31536000, immutable" } });
    }
    if (req.method === "PUT") {
      if (!isAdmin) return new Response("Mot de passe incorrect", { status: 401 });
      const buf = await req.arrayBuffer();
      if (buf.byteLength < 100 || buf.byteLength > 2000000) return new Response("Image invalide ou trop lourde", { status: 400 });
      await photos.set(id, buf);
      return Response.json({ url: "/api/photo?id=" + id + "&v=" + Date.now() }, { headers: noStore });
    }
    return new Response("Méthode non autorisée", { status: 405 });
  }

  const store = getStore({ name: "mariage", consistency: "strong" });
  if (req.method === "GET") {
    const data = await store.get("liste-v2", { type: "json" });
    return Response.json({ items: data?.items ?? SEED, admin: isAdmin }, { headers: noStore });
  }
  if (req.method === "PUT") {
    if (!isAdmin) return new Response("Mot de passe incorrect", { status: 401 });
    const body = await req.json().catch(() => null);
    const items = sanitize(body?.items);
    if (!items) return new Response("Données invalides", { status: 400 });
    await store.setJSON("liste-v2", { items });
    return Response.json({ items }, { headers: noStore });
  }
  return new Response("Méthode non autorisée", { status: 405 });
};

export const config = { path: ["/api/gifts", "/api/photo"] };
