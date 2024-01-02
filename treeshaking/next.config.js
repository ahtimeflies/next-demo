const TerserPlugin = require('terser-webpack-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.optimization.minimizer = [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          mangle: false,
          format: { beautify: true }
        }
      })
    ]

    return config
  }
}

module.exports = nextConfig
