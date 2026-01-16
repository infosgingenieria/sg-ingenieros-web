import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SetHtmlLang from "@/components/SetHtmlLang";
import CTAWhatsApp from "@/components/CTAWhatsApp";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: "es" | "en" = lang?.toLowerCase() === "en" ? "en" : "es";

  return (
    <>
      <SetHtmlLang lang={locale} />
      <Header lang={locale} />
      <CTAWhatsApp lang={locale} />

      <div className="page-offset">{children}</div>

      <Footer lang={locale} />
    </>
  );
}
