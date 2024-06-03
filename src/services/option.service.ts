import { axiosClient } from "@/api/axios.config";
import {IOption} from "../interfaces/option.interface";
import { OPTIONS_API } from "@/utils/api";
class OptionService {
     async getAll(){
        return await axiosClient.get(OPTIONS_API);
     }
     async insert(item : IOption){
        return await axiosClient.post(OPTIONS_API, item);
     }
     async delete(id : number){
        return await axiosClient.delete(OPTIONS_API + `/${id}`);
     }
     async update(item : IOption){
        return await axiosClient.put(OPTIONS_API + `/${item.id}`, item)
     }
     
}
export default new OptionService();