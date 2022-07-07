/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'http://sellify.web.asset.s3-website.ap-south-1.amazonaws.com/',
  },
}
