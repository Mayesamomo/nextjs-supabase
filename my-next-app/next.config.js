const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  ...nextConfig,

  webpack(config) {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                require('tailwindcss'),
                require('postcss-preset-env')({
                  stage: 1,
                  features: {
                    'focus-within-pseudo-class': false,
                  },
                }),
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};
