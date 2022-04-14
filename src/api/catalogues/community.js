import http from "@/lib/http"

const COMMUNITY_LIST = "/community/list";
const COMMUNITY_VIEW = "/community/view";
const COMMUNITY_CREATE = "/community/create";
const COMMUNITY_UPDATE = "/community/update";
const COMMUNITY_DELETE = "/community/delete";

function list(options) {
    return http.post(
        COMMUNITY_LIST,
        options
    )
}

function view(options) {
    return http.post(
        COMMUNITY_VIEW,
        options
    )
}

function create(options) {
    return http.post(
        COMMUNITY_CREATE,
        options
    )
}

function update(options) {
    return http.post(
        COMMUNITY_UPDATE,
        options
    )
}

function del(options) {
    return http.post(
        COMMUNITY_DELETE,
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
