import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";

const RoleList = (props)=>{

    const [roleList , setRoleList] = useState([]);
    const [isError,setIsError] = useState();
    const [isLoading,setIsLoading] = useState(true)
    useEffect(async()=>{
        setIsLoading(true)
        const response=await fetch('http://192.168.1.83:5000/api/role');
          if(!response.ok){
            console.log(response);
            setIsError(true)
            setIsLoading(false)
            return
          }
          const data=await response.json()
          console.log(data);
          setIsError(false)
       
          setRoleList(data)
          setIsLoading(false)

    },[props.reload]);
  
return <div className="m-2">
     <Card>
        <CardBody>
          <CardTitle tag="h5">Role List</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of Role List
          </CardSubtitle>

          {
    !isError && !isLoading &&  <Table className="no-wrap mt-3 align-middle" responsive borderless>
          <thead>
<tr>
    <th>Index</th>
    <th>Role Name</th>
    <th>Active</th>
    <th>Edit</th>
</tr>

    </thead>
            <tbody>
              {roleList.map((data, index) => (
                <tr key={index} className="border-top">
                  <td>{data.role_id}</td>
                  <td>
                    
                          {data.role_name}
                        
                  </td>
                  <td>
                    {data.is_active ? (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td><button className="btn btn-warning border border-none rounded-pill" onClick={()=>{props.editClick(data)}}>Edit</button></td>

                </tr>
              ))}
            </tbody>
          </Table>}
        </CardBody>
      </Card>
    {!isError && isLoading && <div className="text-success text-center">Loading ... </div>}
    {isError && <div className="text-danger text-center">Some Error Occured ... </div>}
</div>

}
export default RoleList;