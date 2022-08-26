exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;


/*
  createRedirect({
    fromPath: `/?degrees=:degrees`,
    toPath: `/api/northsign/?degrees=:degrees`,
  })

https://northsign.gtsb.io/?scale=13\&degrees=4\&scale=7
*/


  createRedirect({
    fromPath: `/?&scale=:scale&degrees=:degrees`,
    toPath: `/api/northsign/?degrees=:degrees&scale=:scale`,
  })


}
