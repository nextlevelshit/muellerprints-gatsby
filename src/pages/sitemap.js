import * as React from "react"
import { Link } from "gatsby"

const pages = [
  "/agbs/",
  "/anfahrt/",
  "/anfrage/",
  "/bindearten/",
  "/daten/",
  "/datentransfer/",
  "/imprint/",
  "/bestellung/",
  "/office-hours/",
  "/links/",
  "/preise/",
  "/printprodukte/",
  "/payment/",
  "/shop/",
  "/disclaimer/",
  "/service/",
  "/specials/",
  "/urlaub/",
  "/beispiele/1/",
  "/beispiele/2/",
  "/beispiele/3/",
  "/beispiele/4/",
  "/beispiele/5/",
  "/beispiele/6/",
  "/beispiele/7/",
  "/beispiele/8/",
  "/papier/"
]

const SitemapPage = () => (
  <main style={{ fontFamily: "system-ui, sans-serif", background: "#f9f9f9", minHeight: "100vh", padding: "2rem" }}>
    <div style={{ maxWidth: 700, margin: "0 auto", background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px #0001", padding: "2rem" }}>
      <h1 style={{ textAlign: "center", color: "#222" }}>Seitenübersicht</h1>
      <p style={{ textAlign: "center", color: "#666" }}>Hier findest du alle wichtigen Seiten dieser Website auf einen Blick.</p>
      <ul style={{ listStyle: "none", padding: 0, margin: "2rem 0" }}>
        {pages.map((page) => (
          <li key={page} style={{ margin: "0.5rem 0", fontSize: "1.1rem" }}>
            <Link to={page} style={{ color: "#0077cc", textDecoration: "none" }}>
              {page.replace(/\//g, " ").replace(/\s+/g, " ").trim() || "Startseite"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </main>
)

export default SitemapPage
