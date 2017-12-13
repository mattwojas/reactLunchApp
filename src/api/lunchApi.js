import axios from 'axios';

class LunchApi {
    static getAllLunches() {
        return axios.get("https://mattwojas.com/lunchappServer/Get/index.php?id=92")
            .then(res => {
                console.log('called the lunches', res)
                return res.data;
            }).catch(error => {
                return error;
            });
    }
}
export default LunchApi;