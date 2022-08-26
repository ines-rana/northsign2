exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;


  createRedirect({
    fromPath: `/?degrees=:degrees`,
    toPath: `/api/northsign/?degrees=:degrees`,
  })

  createRedirect({
    fromPath: `/?&scale=:scale&degrees=:degrees`,
    toPath: `/api/northsign/?degrees=:degrees&scale=:scale`,
  })


}
