// Create a north sign (in SVG or PNG format)

// query parameters
//  degrees :  desired rotation
//  scale   :  desired scale factor
//  format  :  PNG | SVG (default)



const version = "2022-08d"

import Cors from "cors"
const cors = Cors()

const { convert } = require('convert-svg-to-png');

export default async function corsHandler(req, res) {

  // Run CORS middleware and handle errors
  await new Promise((resolve, reject) => {
    cors(req, res, result => {
      if (result instanceof Error) {
        reject(result)
      }
      resolve(result)
    })
  })



  res.setHeader('X-Version', version);



  var degrees = req.query.degrees;
  if (!degrees) degrees = 0;
  var scale = req.query.scale;
  if (!scale) scale = 1.0;
  var format = req.query.format;
  if (!format) format = "SVG";
  format = format.toUpperCase();


  const sign_svg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- north sign rotated by 0 degrees and scaled by 1.0 -->

<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   version="1.1"
   width="400"
   height="400"
   id="svg2">

  <g transform="scale(1.00,1.00)">
    <g
       transform="rotate(0,200,200)"
       style="fill:none;stroke-width:0.025in"
       id="layer1">
  
      <!-- circle -->
      <path
         style="fill:none;fill-opacity:0;stroke:#000000;stroke-width:2;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"
         d="m 370,179.76376 c 0,104.93411 -85.0659,190 -190,190 -104.934102,0 -190,-85.06589 -190,-190 0,-104.934099 85.065898,-189.999997 190,-189.999997 104.9341,0 190,85.065898 190,189.999997 z"
         transform="translate(20,18.85827)" />
      <path
         style="fill:none;stroke:#000000;stroke-width:4;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"
         d="m 200,-1.8767428 -59.61898,380.4987828 59.61898,-30 55.16314,30 z" />
      <path
         style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"
         d="M 200,-1.0509721 200,398.62204" />
      <path
         style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"
         d="m 0,198.62204 400,0" />
    </g>
  </g>
</svg>
`

  const result_svg = 
    sign_svg
    .replace("rotated by 0 degrees", "rotated by " + degrees + " degrees")
    .replace("rotate(0,200,200)", "rotate(" + degrees + ",200,200)")
    .replace("scaled by 1.0", "scaled by " + scale)
    .replace("scale(1.00,1.00)", "scale(" + scale + "," + scale + ")")
    .replace('width="400"', 'width="' + scale*400 + '"')
    .replace('height="400"', 'height="' + scale*400 + '"')
    ;

  if (format === "SVG") {
    res.append('Content-Type', 'image/svg+xml; charset=utf-8');
    res.send( result_svg + '\n' );
    res.end();
    return;
  }


  if (format === "PNG") {
    const png = await convert(result_svg);
    res.append('x-dbg', 
      "typeof png" + typeof png +
      ''
    );
//  res.append('Content-Type', 'image/png');
res.setHeader('Content-Type', 'image/png');
//  res.write(png.toString("binary"), "binary");
    res.send(png);
    res.end();
    return;
  }


  if ( true ) {
    //res.append('Content-Type', 'text/plain; charset=utf-8');
    res.send('invalid query parameter "format" (acceptable values: "PNG" or "SVG")' + '\n' );
    res.end();
    return;
  }

}
