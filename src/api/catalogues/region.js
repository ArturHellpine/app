import http from "@/lib/http"

const REGION_LIST = "/region/list";
const REGION_VIEW = "/region/view";
const REGION_CREATE = "/region/create";
const REGION_UPDATE = "/region/update";
const REGION_DELETE = "/region/delete";

function list(options) {
    return http.post(
        REGION_LIST,
        options
    )
}

function view(options) {
    return http.post(
        REGION_VIEW,
        options
    )
}

function create(options) {
    return http.post(
        REGION_CREATE,
        options
    )
}

function update(options) {
    return http.post(
        REGION_UPDATE,
        options
    )
}

function del(options) {
    return http.post(
        REGION_DELETE,
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
