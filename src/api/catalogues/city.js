import http from "@/lib/http"

const CITY_LIST = "/city/list";
const CITY_VIEW = "/city/view";
const CITY_CREATE = "/city/create";
const CITY_UPDATE = "/city/update";
const CITY_DELETE = "/city/delete";

function list(options) {
    return http.post(
        CITY_LIST,
        options
    )
}

function view(options) {
    return http.post(
        CITY_VIEW,
        options
    )
}

function create(options) {
    return http.post(
        CITY_CREATE,
        options
    )
}

function update(options) {
    return http.post(
        CITY_UPDATE,
        options
    )
}

function del(options) {
    return http.post(
        CITY_DELETE,
        options
    )
}

export default {
    list,
    view,
    create,
    update,
    del
}
