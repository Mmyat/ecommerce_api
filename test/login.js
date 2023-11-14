const axios = require('axios')
axios.post(`http://localhost:8080/api/users/login`,{
  email : "mmzttss@mail.com",
  password : "Abcd123",
}).then((res)=>{
  console.log(res.status);
  console.log(res.data.token);
})
.catch( (error)=> {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      console.log(error.response);
    }
})