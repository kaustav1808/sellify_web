export const postAuth = (tokenPayload: {refreshtoken:string, accesstoken: string, expiretime: string }) => {
    localStorage.removeItem('refresh_token');   
    localStorage.removeItem('access_token');   
    localStorage.removeItem('expiretime'); 

    localStorage.setItem('refresh_token', tokenPayload.refreshtoken);   
    localStorage.setItem('access_token', tokenPayload.accesstoken);   
    localStorage.setItem('expiretime', tokenPayload.expiretime);   
}

export const getAuthToken = () => {
   return localStorage.getItem('access_token')
}