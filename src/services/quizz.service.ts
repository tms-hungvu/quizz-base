import { axiosClient } from "@/api/axios.config";
import { IQuizz } from "@/interfaces/quizz.interface";
import { QUIZZ_API } from "@/utils/api";
class QuizzService {
     async getAll(){
        return await axiosClient.get(QUIZZ_API);
     }
     async insert(item : IQuizz){
        return await axiosClient.post(QUIZZ_API, item);
     }
     async delete(id : number){
        return await axiosClient.delete(QUIZZ_API + `/${id}`);
     }
     async update(item : IQuizz){
        return await axiosClient.put(QUIZZ_API + `/${item.id}`, item)
     }
     
}
export default new QuizzService();