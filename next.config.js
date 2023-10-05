module.exports = {
  output: 'export',
  distDir: 'dist',
  experimental: {
    scrollRestoration: true,
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/(fonts|images|js|styles)/:path*',
  //       headers: [
  //         {
  //           key: 'cache-control',
  //           value: 'public, max-age=172800',
  //         },
  //       ],
  //     },
  //   ];
  // },
};
