/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: process.env.NEXT_STRICT_MODE==='true',
  images: {
    loader: 'imgix',
    path: 'https://asset.sell-ify.co.in',
  },
  trailingSlash: true,
}
