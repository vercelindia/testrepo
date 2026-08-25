/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static export -> matches static.Dockerfile in the worker
};

module.exports = nextConfig;
