"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LangSwitch() {
  const router = useRouter();
  const pathname = usePathname() || "/es";

  const current = pathname.toLowerCase().startsWith("/en") ? "en" : "es";
  const other = current === "es" ? "en" : "es";

  // cambia el primer segmento /es o /en y mantiene el resto
  const target = pathname.replace(/^\/(es|en)/i, `/${other}`);

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
      {other.toUpperCase()}
    </button>
  );
}
