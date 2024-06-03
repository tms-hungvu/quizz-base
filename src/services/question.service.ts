import { axiosClient } from "@/api/axios.config";
import { IQuestion } from "@/interfaces/question.interface";
import { QUESTION_API } from "@/utils/api";
class QuestionService {
     async getAll(){
        return await axiosClient.get(QUESTION_API);
     }
     async insert(item : IQuestion){
        return await axiosClient.post(QUESTION_API, item);
     }
     async delete(id : number){
        return await axiosClient.delete(QUESTION_API + `/${id}`);
     }
     async update(item : IQuestion){
        return await axiosClient.put(QUESTION_API + `/${item.id}`, item)
     }
     
}
export default new QuestionService();