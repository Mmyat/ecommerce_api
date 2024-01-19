const axios = require('axios')
axios.post(`http://localhost:8080/api/users/register`,{
    name : "Myo Myat",
    email : "myomyatzaw23@mail.com.mm",
    password : "Abcd123#",
    // role : "HR"
}).then((res)=>{console.log(res.data);})
.catch( (error)=> {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    }
})