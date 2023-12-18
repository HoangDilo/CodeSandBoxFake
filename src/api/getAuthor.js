import { API_ROUTES, API_URL, HEADER_CONFIG } from "@/constants/apiConstants"

export const getAuthorById = async (authorId) => {
    const response = await fetch(`${API_URL}${API_ROUTES.GET_USER}${authorId}`, {
        method: 'GET',
        headers: HEADER_CONFIG
    });
    return response.json();
};
