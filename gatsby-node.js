exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/?degrees=:degrees&scale=:scale`,
    toPath: `/api/northsign?degrees=:degrees&scale=:scale`,
  })

  createRedirect({
    fromPath: `/blog`,
    toPath: `/english/blog`,
    conditions: { country: [`us`, `gb`] }
  })


}
