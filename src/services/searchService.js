import * as request from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        const res = await request.get(`users/search`, {
            params: {
                q,
                type
            }
        })  
        // Promise chạy code theo chiều dọc
        return res.data
    } catch (error) {
        console.log(error)
    } 
}