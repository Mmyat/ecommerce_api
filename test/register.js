const axios = require('axios')
axios.post(`http://localhost:8080/api/users/register`,{
    name : "ABSDF",
    email : "mmyatzts@mail.com",
    password : "Abcd123",
}).then((res)=>{console.log(res.data);})
.catch( (error)=> {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      console.log(error.response.headers);
    }
})