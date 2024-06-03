import { Table } from "antd";

interface IBaseTable {
   dataSource : any;
   columns : any;
   pagination : any;
}
export default function BaseTable({dataSource, columns, pagination} : IBaseTable){
    return (<Table dataSource={dataSource} columns={columns} pagination={pagination} />  );
}