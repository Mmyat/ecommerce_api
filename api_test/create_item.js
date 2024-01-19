const axios = require('axios')
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWE5ZWIzNjgwZjc4OTNhYTlkMGMyNjUiLCJpYXQiOjE3MDU2Mzg0NDEsImV4cCI6MTcwNTY4MTY0MX0.CeJSWbJK-ZKD9zqKoozQtjvFUk-inBApXg5yTZFgZW4"
axios.post(`http://localhost:8080/api/items/`,
    {
        name : "Baby pant",
        description :"It is 100% cotton shirt,made by Giorendo",
        category : "Fashion and Apparel",
        price : 11500
    },
    {headers: {
      'Authorization' :
          `Bearer ${token}`
      }}
).then((res)=>{console.log(res.data);})
.catch( (error)=> {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    }
})