const axios = require('axios')
axios.post(`http://localhost:8080/api/items/`,
    {
        name : "Baby Shirt",
        description :"It is 100% cotton shirt,made by Giorendo",
        category : "Fashion and Apparel",
        price : 12500
    },
    {headers: {
      'Authorization' :
          `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRjOWFhNzVhMGEwOGNiNTQ4YWY3NjAiLCJpYXQiOjE2OTk3MTYyNDYsImV4cCI6MTY5OTcxOTg0Nn0.zlRW9Lmbsp_c6VI7tBUFsMS_vQalSD8mB9ZiSqvkx3c`
      }}
).then((res)=>{console.log(res.data);})
.catch( (error)=> {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    }
})