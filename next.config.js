/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // 使用 chokidar 替代 fsevents
      if (!isServer) {
        config.watchOptions = {
          ...config.watchOptions,
          ignored: /node_modules/,
          poll: 1000 // 检查更改的频率
        };
      }
      return config;
    },
}
  
module.exports = nextConfig