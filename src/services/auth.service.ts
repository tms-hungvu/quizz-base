import { axiosClient } from "@/api/axios.config";
import { IUser } from "@/interfaces/user.interface";
import { LOGIN_API, REGISTER_API } from "@/utils/api";
class AuthService {
     async signIn(user : IUser){
        return await axiosClient.post(LOGIN_API, user);
     }
     async signUp(user : IUser){
        return await axiosClient.post(REGISTER_API, user);
     }
}
export default new AuthService();