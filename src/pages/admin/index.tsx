import { pages } from "next/dist/build/templates/app-page"
import getLayoutAdmin from "./_components/Layout/AdminLayout";

export default function Dashboard(){
    return <h1> dashboard admin</h1>
}

Dashboard.getLayout = getLayoutAdmin;