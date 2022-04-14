import http from "@/lib/http"

const DISTRICTS_LIST = "/districts/list";
const DISTRICTS_VIEW = "/districts/view";
const DISTRICTS_CREATE = "/districts/create";
const DISTRICTS_UPDATE = "/districts/update";
const DISTRICTS_DELETE = "/districts/delete";


function list(options) {
    return http.post(
        DISTRICTS_LIST,
        options
    )
}

function view(options) {
    return http.post(
        DISTRICTS_VIEW,
        options
    )
}

function create(options) {
    return http.post(
        DISTRICTS_CREATE,
        options
    )
}

function update(options) {
    return http.post(
        DISTRICTS_UPDATE,
        options
    )
}

function del(options) {
    return http.post(
        DISTRICTS_DELETE,
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
