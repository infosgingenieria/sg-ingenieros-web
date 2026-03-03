/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Consolidate legacy /es paths into root Spanish URLs
      { source: "/es", destination: "/", permanent: true },
      { source: "/es/:path*", destination: "/:path*", permanent: true },

      // Optional: legacy English under /en/servicios etc (if you had links)
      { source: "/en/servicios", destination: "/en/services", permanent: true },
      { source: "/en/proyectos", destination: "/en/projects", permanent: true },
      { source: "/en/contacto", destination: "/en/contact", permanent: true },
    ];
  },
};

export default nextConfig;
