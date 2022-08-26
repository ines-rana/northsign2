import * as React from "react"
import { Helmet } from "react-helmet"


export default () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta http-equiv = "refresh" content = "0; url = /api/northsign" />
      </Helmet>

    </React.Fragment>
  )
}
