exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;

/*
  createRedirect({
    fromPath: `/`,
    toPath: `/api/northsign/`,
  })


https://northsign.gtsb.io/?scale=13\&degrees=4\&scale=7

  createRedirect({
    fromPath: `/?degrees=:degrees`,
    toPath: `/api/northsign/?degrees=:degrees`,
  })
  createRedirect({
    fromPath: `/?scale=:scale`,
    toPath: `/api/northsign/?scale=:scale`,
  })

*/

  createRedirect({
    fromPath: `/?degrees=:degrees&scale=:scale`,
    toPath: `/api/northsign/?degrees=:degrees&scale=:scale`,
  })
}
