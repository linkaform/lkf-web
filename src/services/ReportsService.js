import ApiService from './ApiService'

export async function canOpenReport(reportId) {
    if (reportId) {
        let url = '/infosync/user_admin/can_open_report/' + reportId + '/'
        return ApiService.fetchData({
            url: url,
            method: 'get',
        })
    }
}

export async function getReports(parentId) {
    let url = '/infosync/get_reports/'
    url = parentId ? url + '?parent_id=' + parentId : url
    return ApiService.fetchData({
        url: url,
        method: 'get',
    })
}


export async function runScript(scriptId) {
    //let url = '/infosync/get_reports/'
    let url = 'infosync/scripts/run/'
    const data = {
        script_id: scriptId,
    }
    let  result = null;
    result = ApiService.fetchData({
        url: url,
        method: 'post',
        data,
    })
    console.log('script result', result)
    return result
}

