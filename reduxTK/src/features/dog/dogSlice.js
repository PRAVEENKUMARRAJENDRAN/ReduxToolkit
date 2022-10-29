import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const DOGS_API_KEY ="live_ZE1wPG2DBbPdI9t5aTnVnmISD3JhsoYQaXSFiS4P2F0eSG59OJzmm7O9G6G0yZFq"
  

// const initialState = {
//   id: "",
//   name: "",
//   image: {
//     url: "",
//   },
// };

export const apiSlice = createApi({
  //where we are going to data
  reducerPath: "api",
  //the url and headers part
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1",
    prepareHeaders(headers) {
      headers.set("x-api-key", DOGS_API_KEY);
      return headers;
    },
  }),
  endpoints(builder){
    return {
        fetchBreeds: builder.query({
            query(limit = 10 ){
                return `/breeds?limit=${limit}`
            }
        })
    }
  }
});

//In the enpoints builder we are creating fetchBreeds , RTK query  automatically creates one...
export const { useFetchBreedsQuery } = apiSlice
