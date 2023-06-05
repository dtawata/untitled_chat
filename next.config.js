/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['penguchat-room.s3.amazonaws.com', 'penguchat-users.s3.amazonaws.com'],
  },
  env: {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
  }
}

module.exports = nextConfig