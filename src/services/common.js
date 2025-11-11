import axios from "axios";

const commonAPI=async(httpMethod,url,reqbody)=>{
    const reqconfig={
        method:httpMethod,
        url:url,
        data:reqbody
    }
    return await axios(reqconfig)
    .then((response)=>response)
    .catch((err)=>err)
}
export default commonAPI