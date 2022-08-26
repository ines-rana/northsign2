import * as React from "react"
import { Helmet } from "react-helmet"


export default () => {
  return (
<div>
    <scriptComponent />
<script
  dangerouslySetInnerHTML={{
    __html: `
 console.log("123");

 if(typeof window !== 'undefined' && window.document) {
    // run this script on client-side
    console.log(window.location.href);
 }

      var foo = 'bar';
      console.log(foo);
    `,
  }}
/>
<div> a.JS </div>
</div>
  )
}
