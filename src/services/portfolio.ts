import http from "../axios/http-commons";
import  DataPortfolio from "../interface/Idata";

class DataPortfolioService{
    getAll(){
        return http.get<DataPortfolio>("");
    }
}

export default new DataPortfolioService;