import * as React from "react"
import { Helmet } from "react-helmet"


export default () => {
  return (
<div>
    <scriptComponent />
<script
  dangerouslySetInnerHTML={{
    __html: `
      var foo = 'bar';
      console.log(foo);
    `,
  }}
/>
<div> a.JS </div>
</div>
  )
}
