const axios = require('axios')
axios.post(`http://localhost:8080/api/users/register`,{
    name : "Master Mmyat sgn",
    email : "mmyathaha@mail.com",
    password : "Abcd123#",
}).then((res)=>{console.log(res.data);})
.catch( (error)=> {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    }
})