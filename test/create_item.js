const axios = require('axios')
axios.post(`http://localhost:8080/api/items/`,
    {
        name : "Baby Trouser",
        description :"It is 100% cotton shirt,made by Giorendo",
        category : "Fashion and Apparel",
        price : 13500
    },
    {headers: {
      'Authorization' :
          `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU0OTlmOGY5NDYyMDY0ZGM2MWZjM2EiLCJpYXQiOjE3MDAwNDMyOTUsImV4cCI6MTcwMDA0Njg5NX0.VBQ0STun3xJn6ASrTi3JGW_VLvcH89U8bchHgTMfc1g`
      }}
).then((res)=>{console.log(res.data);})
.catch( (error)=> {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    }
})