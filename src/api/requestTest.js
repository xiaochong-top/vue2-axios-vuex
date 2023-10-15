import request from "./index"

export function github(){
    return request({
        url:'/xiaochong-top',
        method:'get',
        // params:query
    })
}


