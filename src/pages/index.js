import * as React from "react"

// dynamic redirection

export default () => {
  return (
<script
  dangerouslySetInnerHTML={{
    __html: `

 if(typeof req !== 'undefined' && req.url) {
   console.log("H I I I);
 }
 if(typeof window !== 'undefined' && window.document) {
    // run this script on client-side
    var old_url = window.location.href; 
    var new_url = old_url
      .replace("/index.html/","/api/northsign/")
      .replace("/?","/api/northsign/?")
    );
 }

      var foo = 'bar';
      console.log("redirection from %s to %s", old_url, new_url);
//    window.location = new_url;
    `,
  }}
/>
  )
}
