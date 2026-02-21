import axios from 'axios';

const API_BASE_URL = 'https://infnova-course-api.vercel.app/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});



export const getCourses = async () => {
    try {
        const response = await api.get('/courses');
        return response.data;
    } catch (error) {
        console.error('Error fetching courses', error);

    }
};

export const getCourseById = async (id) => {
    try {
        const response = await api.get(`/courses/${id}`);
        const data = response.data;


        return data;
    } catch (error) {
        console.error(`Error fetching course ${id}`, error);

    }
};

export default api;
