import { API_ROUTES, API_URL, HEADER_CONFIG } from "@/constants/apiConstants"

export const getAllChallenges = async () => {
    const response = await fetch(`${API_URL}${API_ROUTES.GET_CHALLENGE}`, {
        method: 'GET',
        headers: HEADER_CONFIG,
    })
    return response.json();
}

export const getChallengeById = (challengeId) => {
    console.log(`${API_URL}${API_ROUTES.GET_CHALLENGE}${challengeId}`);
}