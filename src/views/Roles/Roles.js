import { useState} from "react";
import React from "react";
import { Button } from "reactstrap";
import RoleAddForm from "./RoleAddForm";
import RoleList from "./RoleList";
import RoleEditForm from "./RoleEditForm";

const Roles = () => {
    const [addModal, setAddModal] = useState(false);
    const [Refresh,setRefresh]=useState(false);
    const [editModal, setEditModal] = useState(false);
    const [editModalData,setEditModalData] =useState({}); 
    const editHandler = (data)=>{
       setEditModalData(data);
       setEditModal(!editModal)
    }
    return (
        <div className="p-4">
            <Button color="primary" className="m-2" onClick={()=>{setAddModal(!addModal)}}>Add Role</Button>
            <RoleList reload={Refresh} editClick={editHandler} />
            <RoleAddForm  reload={setRefresh} modal={addModal} setModal = {setAddModal} />
            <RoleEditForm reload={setRefresh}   modal={editModal} setModal = {setEditModal} editdata={editModalData} />
        </div>
    )
}
export default Roles;