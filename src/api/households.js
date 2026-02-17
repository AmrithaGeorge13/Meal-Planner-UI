import {apiGet} from "./apiClient.js";

export async function getHouseholds(){
    return apiGet('/households');
}

export async function getHousehold(id){
    return apiGet(`/households/${id}`);
}

export async function createHousehold(body){
    return apiGet(`/households`,body);
}
export async function updateHousehold(id,body){
    return apiGet(`/households/${id}`,body);
}

export async function deleteHousehold(id){
    return apiGet(`/households/${id}`);
}