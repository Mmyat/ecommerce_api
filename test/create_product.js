const axios = require('axios')
axios.post(`http://localhost:8080/api/items/`,{
    name : "Girl Shirt",
    description :"It is 100% cotton shirt,made by Giorendo",
    category : "Fashion and Apparel",
    price : 8500,
    tokens : [{
        token :'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRjOWFhNzVhMGEwOGNiNTQ4YWY3NjAiLCJpYXQiOjE2OTk2MDc1MjZ9.GJgx3alovnnIvm-AMdFm8k3RqF2AoMfCI_NxmTRpwmY'
    }]
}).then((res)=>{console.log(res.data);})
.catch( (error)=> {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    }
})