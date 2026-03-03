"use client";

import { usePathname, useRouter } from "next/navigation";

const ES_TO_EN: Array<[RegExp, string]> = [
  [/^\/$/i, "/en"],
  [/^\/servicios(\/.*)?$/i, "/en/services$1"],
  [/^\/proyectos(\/.*)?$/i, "/en/projects$1"],
  [/^\/contacto(\/.*)?$/i, "/en/contact$1"],
];

const EN_TO_ES: Array<[RegExp, string]> = [
  [/^\/en$/i, "/"],
  [/^\/en\/services(\/.*)?$/i, "/servicios$1"],
  [/^\/en\/projects(\/.*)?$/i, "/proyectos$1"],
  [/^\/en\/contact(\/.*)?$/i, "/contacto$1"],
];

export default function LangSwitch() {
  const router = useRouter();
  const pathname = usePathname() || "/";

  const isEn = pathname.toLowerCase().startsWith("/en");

  const target = (() => {
    const rules = isEn ? EN_TO_ES : ES_TO_EN;
    for (const [re, to] of rules) {
      if (re.test(pathname)) return pathname.replace(re, to);
    }
    // fallback: toggle prefix
    if (isEn) return pathname.replace(/^\/en/i, "") || "/";
    return "/en" + (pathname.startsWith("/") ? pathname : "/" + pathname);
  })();

  return (
    <button
      type="button"
      onClick={() => router.push(target)}
      style={{
        cursor: "pointer",
        padding: "6px 10px",
        border: "1px solid #ddd",
        borderRadius: 10,
        fontSize: 13,
        background: "transparent",
      }}
    >
      {(isEn ? "ES" : "EN")} 
    </button>
  );
}
