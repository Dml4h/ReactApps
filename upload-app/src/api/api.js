//how to do the function to submit the form
//submit file button 
//const url="yourendpoint.com"
import axios from "axios";

// const instance = axios.create({
//     baseURL: 'https://yourendpointplaceholder.com'
//     // baseURL: "http://localhost:8000",
// }); 

// export default{
//      fileSubmit: (file)=>
//      instance(
//         //  console.log(file, "here"),
//          {
//         'method': 'GET',
//         'url': '/query',
//         'params': {
//             'datatype': 'file',
//             'symbol': file,
//         }
//      }),
//  } 

export default{
    fileSubmit:(file)=>{
        debugger
    axios.post('http://localhost:8000', file,{
    })
    .then((res) => {
    console.log(`Status code: ${res.status}`)
    console.log(`Status text: ${res.statusText}`)
    console.log(`Request method: ${res.request.method}`)
    console.log(`Path: ${res.request.path}`)
    console.log(`Date: ${res.headers.date}`)
    console.log(`Data: ${file}`)
    })
    .catch((error)=>{
        console.log(error)
    })
}
}


