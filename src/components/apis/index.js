import axios from "axios"

axios.defaults.baseURL="http://localhost:3000";

// export const getUserAPI = async()=>{ axios.get("/data") }
// console.log(getUserAPI())

export const getUserAPI = async () => {
    const response = await axios.get("/data");
    console.log(response)
    return response.data;
};
export const getUserByIdAPI = async (id) => {
    const response = axios.get("/data/"+{id});
    console.log(response)
    return response.data;
};

// export const getUserByIdAPI = async(id)=>{axios.get("/data/"+{id})}

export const createUserAPI=async(user)=>{axios.post("/data",user)}

export const deleteUserAPI=async(id)=>{axios.delete("/data/"+{id})}

// export const updateUserAPI=async(user)=>{axios.put("/data",user)}
export const updateUserAPI = async (user) => {
    console.log(user)
    const id = user.id;
    console.log(id)
    const response = axios.put(`/data/${id}`, user);
    console.log(response)
    return response.data;
};