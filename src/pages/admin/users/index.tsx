
import type { NextPageWithLayout } from "@/pages/_app";
import getLayoutAdmin from "../_components/Layout/AdminLayout";
const ListUser : NextPageWithLayout = () => {
    return (<h1 className="">List user page</h1>)
}

ListUser.getLayout = getLayoutAdmin;
export default ListUser
