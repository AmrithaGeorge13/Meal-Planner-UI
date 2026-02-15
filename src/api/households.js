import {apiGet} from "./apiClient.js";

export async function getHouseholds(){
    return apiGet('/households');
}