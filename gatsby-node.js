exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;

/*
  createRedirect({ fromPath: `/`, toPath: `/api/northsign/`, })

https://northsign.gtsb.io/?scale=13\&degrees=4\&scale=7

  createRedirect({ fromPath: `/?degrees=:degrees`,
    toPath: `/api/northsign/?degrees=:degrees` })

*/

/* 
      -> This will NOT work; no scale/degrees parameters in the redirection URL
  createRedirect({ fromPath: `/?degrees=:degrees&scale=:scale`,
    toPath: `/api/northsign/?degrees=:degrees&scale=:scale` })

  // /?y=2\x\&degrees=4\&scale=7 -> /?y=2x&degrees=4
  createRedirect({ fromPath: `/?scale=:scale`,
    toPath: `/api/northsign/?scale=:scale` })

  // /?y=2\x\&degrees=4\&scale=7\&dummyParameter=1 -> /?y=2x&degrees=4&scale=4
  createRedirect({ fromPath: `/?dummyParameter=:dummyParameter`,
    toPath: `/api/northsign/?dummyParameter=:dummyParameter` })

  // This will NOT work; no redirection
  createRedirect({ fromPath: `/?`, toPath: `/api/northsign/?` })
*/
}

  createRedirect({ fromPath: `/?`,
    toPath: `/api/northsign/?` })
}
