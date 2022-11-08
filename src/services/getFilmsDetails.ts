import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const getFilmsDetails = (id:string): Promise<AxiosResponse> => {
     const options: AxiosRequestConfig = {
          method: "GET",
          url: `https://api.tvmaze.com/shows/${id} `,
     };

     return axios.request(options);
};

export default getFilmsDetails