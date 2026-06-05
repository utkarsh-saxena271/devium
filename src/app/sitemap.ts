import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE = "https://devium.utkrsh.online";
// Change this path if your MDX files live somewhere different
const LOGS_DIR = path.join(process.cwd(), "src/content/devlogs");

function getDevlogSlugs() {
  const slugs: { year: string; month: string; day: string }[] = [];
  if (!fs.existsSync(LOGS_DIR)) return slugs;
  for (const year of fs.readdirSync(LOGS_DIR)) {
    const yPath = path.join(LOGS_DIR, year);
    if (!fs.statSync(yPath).isDirectory()) continue;
    for (const month of fs.readdirSync(yPath)) {
      const mPath = path.join(yPath, month);
      if (!fs.statSync(mPath).isDirectory()) continue;
      for (const file of fs.readdirSync(mPath)) {
        if (!file.endsWith(".mdx")) continue;
        slugs.push({ year, month, day: file.replace(".mdx", "") });
      }
    }
  }
  return slugs;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const devlogs = getDevlogSlugs().map(({ year, month, day }) => ({
    url: `${BASE}/devlogs/${year}/${month}/${day}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/devlogs`, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/learn`, changeFrequency: "weekly", priority: 0.8 },
    ...devlogs,
  ];
}