# ecommerce_api
This API is hosting on Render at - https://market-api-xr09.onrender.com/

Register user account method using axios,

const axios = require('axios')
axios.post(`http://localhost:8080/api/users/register`,{
    name : "Myo Myat",
    email : "myomyatzaw23@mail.com.mm",
    password : "Abcd123#",
    role : "admin" //use user role as "admin" or "user" for registration
}).then((res)=>{console.log(res.data);})
.catch( (error)=> {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    }
})

Login user account method using axios,

axios.post(`http://localhost:8080/api/users/login`,{
  email : "mmyathaha@mail.com",
  password : "Abcd123#",
}).then((res)=>{
  console.log(res.data);
})
.catch( (error)=> {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    }
})