import withPWA from "next-pwa";

const nextConfig = {};

const pwaConfig = withPWA({
  dest: "public/pwa",
});

export default pwaConfig(nextConfig);
