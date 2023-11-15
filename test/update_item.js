const axios = require('axios')
axios.put("http://localhost:8080/api/items/6551945df0218d23954e3e82",{
    name : "Boy Trouser",
    description :"It is 100% cotton,made by Giorendo",
    category : "Fashion and Apparel",
    price : 9500,
},
{headers: {
    'Authorization' :
        `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU0OTlmOGY5NDYyMDY0ZGM2MWZjM2EiLCJpYXQiOjE3MDAwNDMyOTUsImV4cCI6MTcwMDA0Njg5NX0.VBQ0STun3xJn6ASrTi3JGW_VLvcH89U8bchHgTMfc1g`
    }}
).then((res)=>{console.log(res.data);})
.catch(console.log())