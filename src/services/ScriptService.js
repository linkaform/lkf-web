import ApiService from './ApiService'

export async function runScript(data) {   
    return ApiService.fetchData({
        url: '/infosync/scripts/run/',
        method: 'post',
        data
    })
}