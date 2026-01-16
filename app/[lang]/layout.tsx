import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SetHtmlLang from "@/components/SetHtmlLang";
import CTAWhatsApp from "@/components/CTAWhatsApp";

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const locale = params.lang?.toLowerCase() === "en" ? "en" : "es";

  return (
    <>
      <SetHtmlLang lang={locale} />
      <Header lang={locale} />
      <div style={{ height: 84 }} />

      <CTAWhatsApp lang={locale} />

      {children}

      <Footer lang={locale} />
    </>
  );
}
