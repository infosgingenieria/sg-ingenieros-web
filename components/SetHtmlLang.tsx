// components/SetHtmlLang.tsx
"use client";

import { useEffect } from 'react';

export default function SetHtmlLang({ lang }: { lang: 'es' | 'en' }) {
  useEffect(() => {
    // Actualiza <html lang="…"> cuando se hidrate en el cliente
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
