export function jsonResponse(code: number=500, msg?: string, data?: Object): Object
{
    let res = {}
    switch(code)
    {
        case 400:
            res = {status: 400, message: msg || 'request tidak valid'}
            break
        case 403:
            res = {status: 403, message: msg || 'akses dilarang'}
            break
        case 404:
            res = {status: 404, message: msg || 'halaman tidak ditemukan'}
            break
        case 200:
            res = Object.assign({}, data, {status: 200, message: msg || 'ok'})
            break
        case 201:
            res = {status: 201, message: msg || 'aksi berhasil'}
            if(data) res = Object.assign(res, data) //if have response data
            break
        case 204:
            res = {status: 204, message: msg || 'konten tidak ada'}
            break
        case 500:
        default:
            res = {status: 500, message: msg || 'terjadi masalah di sistem kami'}
            break
    }

    return res
}