const axios = require('axios')
axios.get("http://localhost:8080/api/items/6551945df0218d23954e3e82",
{headers: {
    'Authorization' :
        `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU0OTlmOGY5NDYyMDY0ZGM2MWZjM2EiLCJpYXQiOjE3MDAwNDMyOTUsImV4cCI6MTcwMDA0Njg5NX0.VBQ0STun3xJn6ASrTi3JGW_VLvcH89U8bchHgTMfc1g`
    }}
).then((res)=>{console.log(res.data);})
.catch(console.log())