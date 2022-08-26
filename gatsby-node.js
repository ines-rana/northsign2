exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;


  createRedirect({
    fromPath: `/?degrees=:degrees`,
    toPath: `/api/northsign/?degrees=:degrees`,
  })

  createRedirect({
    fromPath: `/?degrees=:degrees&scale=:scale`,
    toPath: `/api/northsign/?degrees=:degrees&scale=:scale`,
  })


}
