import withPWA from "next-pwa";

const nextConfig = {};

const pwaConfig = withPWA({
  dest: "public",
});

export default pwaConfig(nextConfig);
