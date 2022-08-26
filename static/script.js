 console.log("server side", req.headers);

 if(typeof window !== 'undefined' && window.document) {
    // run this script on client-side
    console.log(window.location.href);
 }


