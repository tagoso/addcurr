/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/addcurr",
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://tagoso.net/addcurr",
        permanent: false,
        basePath: false,
      },
      {
        source: "/how-to",
        destination: "https://tagoso.net/addcurr/how-to",
        permanent: false,
        basePath: false,
      },
    ];
  },
}

module.exports = nextConfig
