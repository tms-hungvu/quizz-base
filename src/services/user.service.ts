import { axiosClient } from "@/api/axios.config";
import { IUser } from "@/interfaces/user.interface";
import { USER_API } from "@/utils/api";
class UserService {
     async getAll(){
        return await axiosClient.get(USER_API);
     }
     async insert(item : IUser){
        return await axiosClient.post(USER_API, item);
     }
     async delete(id : number){
        return await axiosClient.delete(USER_API + `/${id}`);
     }
     async update(item : IUser){
        return await axiosClient.put(USER_API + `/${item.id}`, item)
     }
     
}
export default new UserService();