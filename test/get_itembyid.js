const axios = require('axios')
axios.get("http://localhost:8080/api/items/65435fbfb4bf836e63bc7d78",
{headers: {
    'Authorization' :
        `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWQ3YjY3MDY1Mzg5NGU2YzAwZTgiLCJpYXQiOjE2OTk5NTI5NDMsImV4cCI6MTY5OTk1NjU0M30.iTbsL9cs6KDd7t7aIwokhk5X6gtYIpyhToH3wegAjYo`
    }}
).then((res)=>{console.log(res.data);})
.catch(console.log())