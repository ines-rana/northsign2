exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;

  // !!! delete src/pages/index.js first !!!
  //     otherwise the following will not work

  createRedirect({
    fromPath: '/',
    toPath: 'https://northsign.gatsbyjs.io/api/northsign/',
    isPermanent: true,
    redirectInBrowser: true,
 })

}
