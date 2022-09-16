import React, { useEffect, useState } from "react";
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";


export default function PermissionForm() {

  const PermissionList=(Obj)=>{
    let objArr=[]
    Obj.forEach(element => {
      element.permission.forEach(sbel => {
        //2nd level nesting
        if(sbel.permission){
          // console.log(sbel);
          sbel.permission.forEach(sbel2 => {
            sbel2.allowed && objArr.push(sbel2.permission_id)
          });
        }
        else{
          sbel.allowed && objArr.push(sbel.permission_id);
        }
      });
  });
  return objArr;
  }
  let Data2=[
    {
      title: "Home",
      permission: [
        {
          permission_id: 1,
          title: "Dashboard",
          allowed: false,
          href:'/Dashboard'
        },
        {
          permission_id: 2,
          title: "Policy",
          allowed: false,
          href:'/Policy'
        },
        {
          permission_id: 3,
          title: "Assigned Project",
          allowed: false,
          href:'/AssignProject'
        },
      ],
    },
    {
      title: "import log",
      permission: [
        {
          permission_id: 4,
          title: "Add Log",
          allowed: false,
          href:'/Addlog'
        },
        {
          permission_id: 5,
          title: "Delete Log",
          allowed: false,
          href:'/Deletelog'
        },
        {
          permission_id: 6,
          title: "Edit Log",
          allowed: false,
          href:'/Editlog'
        },
        {
          permission_id: 7,
          title: "edited log",
          allowed: false,
          href:'/Editedlog'
        },
      ],
    },
    {
      title: "leave",
      permission: [
        {
          permission_id: 8,
          title: "leave",
          allowed: false,
          href:'/Leave'
        },
        {
          permission_id: 9,
          title: "leave list",
          allowed: false,
          href:'/Leavelist'
        },
        {
          permission_id: 10,
          title: "leave balance",
          allowed: false,
          href:'/Leavebalance'
        },
      ],
    },
    {
      title: "employee",
      permission: [
        {
          permission_id: 11,
          title: "add/remove Employee",
          allowed: false,
          href:'/Addremoveemployee'
        },
        {
          permission_id: 12,
          title: "monthly attendance",
          allowed: false,
          href:'/Monthlyattendance'
        },
        {
          permission_id: 13,
          title: "attendence details(all)",
          allowed: false,
          href:'/Attendancedetailsall'
        },
        {
          permission_id: 14,
          title: "employee list",
          allowed: false,
          href:'/Employeelist'
        },
        {
          permission_id: 15,
          title: "edit profile",
          allowed: false,
          href:'/Editprofile'
        },
        {
          permission_id: 16,
          title: "attendence details",
          allowed: false,
          href:'/Attendancedetails'
        },
      ],
    },
    {
      title: "administration",
      permission: [
        {
          permission_id: 17,
          title: "holidays",
          allowed: false,
          href:'/Attendancedetails'
        },
        {
          permission_id: 18,
          title: "department",
          allowed: false,
          href:'/Attendancedetails'
        },
        {
          permission_id: 19,
          title: "designation",
          allowed: false,
          href:'/Attendancedetails'
        },
        {
          permission_id: 20,
          title: "leave application",
          allowed: false,
          href:'/Attendancedetails'
        },
        {
          permission_id: 21,
          title: "leave type",
          allowed: false,
          href:'/Attendancedetails'
        },
        {
          permission_id: 22,
          title: "leave balance",
          allowed: false,
          href:'/Attendancedetails'
        },
        {
          permission_id: 23,
          title: "leave assign",
          allowed: false,
          href:'/Attendancedetails'
        },
        {
          permission_id: 24,
          title: "add role",
          allowed: false,
          href:'/Attendancedetails'
        },
        {
          title: "form permission",
          permission: [
            {
              permission_id: 25,
              title: "user wise",
              allowed: false,
              href:'/Attendancedetails'
            },
            {
              permission_id: 26,
              title: "group wise",
              allowed: false,
              href:'/Attendancedetails'
            },
          ],
        },
      ],
    },
  ]
    const [Data,setData]=useState([
        {
          title: "Home",
          permission: [
            {
              permission_id: 1,
              title: "Dashboard",
              allowed: false,
              href:'/Dashboard'
            },
            {
              permission_id: 2,
              title: "Policy",
              allowed: false,
              href:'/Policy'
            },
            {
              permission_id: 3,
              title: "Assigned Project",
              allowed: false,
              href:'/AssignProject'
            },
          ],
        },
        {
          title: "import log",
          permission: [
            {
              permission_id: 4,
              title: "Add Log",
              allowed: false,
              href:'/Addlog'
            },
            {
              permission_id: 5,
              title: "Delete Log",
              allowed: false,
              href:'/Deletelog'
            },
            {
              permission_id: 6,
              title: "Edit Log",
              allowed: false,
              href:'/Editlog'
            },
            {
              permission_id: 7,
              title: "edited log",
              allowed: false,
              href:'/Editedlog'
            },
          ],
        },
        {
          title: "leave",
          permission: [
            {
              permission_id: 8,
              title: "leave",
              allowed: false,
              href:'/Leave'
            },
            {
              permission_id: 9,
              title: "leave list",
              allowed: false,
              href:'/Leavelist'
            },
            {
              permission_id: 10,
              title: "leave balance",
              allowed: false,
              href:'/Leavebalance'
            },
          ],
        },
        {
          title: "employee",
          permission: [
            {
              permission_id: 11,
              title: "add/remove Employee",
              allowed: false,
              href:'/Addremoveemployee'
            },
            {
              permission_id: 12,
              title: "monthly attendance",
              allowed: false,
              href:'/Monthlyattendance'
            },
            {
              permission_id: 13,
              title: "attendence details(all)",
              allowed: false,
              href:'/Attendancedetailsall'
            },
            {
              permission_id: 14,
              title: "employee list",
              allowed: false,
              href:'/Employeelist'
            },
            {
              permission_id: 15,
              title: "edit profile",
              allowed: false,
              href:'/Editprofile'
            },
            {
              permission_id: 16,
              title: "attendence details",
              allowed: false,
              href:'/Attendancedetails'
            },
          ],
        },
        {
          title: "administration",
          permission: [
            {
              permission_id: 17,
              title: "holidays",
              allowed: false,
              href:'/Attendancedetails'
            },
            {
              permission_id: 18,
              title: "department",
              allowed: false,
              href:'/Attendancedetails'
            },
            {
              permission_id: 19,
              title: "designation",
              allowed: false,
              href:'/Attendancedetails'
            },
            {
              permission_id: 20,
              title: "leave application",
              allowed: false,
              href:'/Attendancedetails'
            },
            {
              permission_id: 21,
              title: "leave type",
              allowed: false,
              href:'/Attendancedetails'
            },
            {
              permission_id: 22,
              title: "leave balance",
              allowed: false,
              href:'/Attendancedetails'
            },
            {
              permission_id: 23,
              title: "leave assign",
              allowed: false,
              href:'/Attendancedetails'
            },
            {
              permission_id: 24,
              title: "add role",
              allowed: false,
              href:'/Attendancedetails'
            },
            {
              title: "form permission",
              permission: [
                {
                  permission_id: 25,
                  title: "user wise",
                  allowed: false,
                  href:'/Attendancedetails'
                },
                {
                  permission_id: 26,
                  title: "group wise",
                  allowed: false,
                  href:'/Attendancedetails'
                },
              ],
            },
          ],
        },
      ])
    const [Permissions,setPermission]=useState(false);
    const [Users,setUsers]=useState()
    const [GetUser,setGetUser]=useState()
    // console.log(Permissions);
    useEffect(async()=>{
        const response=await fetch('http://192.168.1.83:5000/api/users');
        const data=await response.json();
        setUsers(data)
        setGetUser(data[0].employee_id)    
    },[])
  const SubmitHandler = async(event) => {
    event.preventDefault();
    console.log(JSON.stringify(PermissionList(Data)));
    const response= await fetch(`http://192.168.1.83:5000/api/userPermission/${GetUser}`,{
      method:'PUT',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(PermissionList(Data))
    })
    if(!response.ok){
      alert('Something Went Wrong While Changing Permissions')
      return
    }
    const responseData=await response.json();
    console.log(responseData);
    alert("Permissions Changed Successfully");
    setPermission(false)
  };
    const HandleToggle=(Data,id,val)=>{
      Data.forEach(element => {
        element.permission.forEach(sbelem => {
            if(sbelem.permission){
                sbelem.permission.forEach(child => {
                    if(Number(child.permission_id)===Number(id)){
                        child.allowed=val;
                    }
                });
            }
            else{
                if(Number(sbelem.permission_id)===Number(id)){
                    sbelem.allowed=val;
                }
            }
        });
      });
      setData(prev=>[...Data]);
    }

    const ValidatePermissions=(state,action)=>{
        state.forEach(element => {
            element.permission.forEach(sbel => {
              //2nd level nesting
              if(sbel.permission){
                // console.log(sbel);
                sbel.permission.forEach(sbel2 => {
                  action.forEach(up => {       
                      if(sbel2.permission_id===up.permission_id){
                        sbel2.allowed=true;
                    }  
                   });   
                });
              }
              else{
               action.forEach(up => {
                if(sbel.permission_id===up.permission_id){
                    sbel.allowed=true;
                }
               });
              }
            });
        });
        setData(prev=>[...state]);
    }

    const GetPermissions=async()=>{
        const response=await fetch(`http://192.168.1.83:5000/api/userPermission/${GetUser}`);
        if(!response.ok){
          setPermission(false)
          alert("Error While Fetching Permissions")
          return
        }
        const data=await response.json();
        ValidatePermissions(Data2,data)
        setPermission(true)
    }
  return (
    <>
      <Row>
        <Col>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-bell me-2"> </i>
              Permission Form
            </CardTitle>
            <CardBody>
              <Form onSubmit={SubmitHandler}>
                {Users && <FormGroup>
                  <Label for="exampleSelect">Users</Label>
                  <div className="row">
                    <div className="col-md-9">
                    <Input id="exampleSelect" name="select" type="select" onChange={(event)=>{setGetUser(Number(event.currentTarget.value))}}>
                    {Users.map((element,index)=><option value={element.employee_id}>{element.employee_name}</option>)}
                  </Input>
                    </div>
                    <div className="offset-md-1 col-md-2">
                    <Button onClick={GetPermissions}>Get Permissions</Button>
                    </div>
                  </div>
                </FormGroup>}
                {Permissions && 
                <>
                    <FormGroup check>
                    <legend>Permissions -:</legend>
                    {Data.map((item, index) => {
                      return (
                        <>
                          {" "}
                          <label>
                            <em>
                              <strong>{item.title}</strong>
                            </em>
                          </label>
                          <br />
                          <br />{" "}
                          {item.permission.map((child, index2) => {
                            return (
                              <>
                                {child.permission ? (
                                  <>
                                    {" "}
                                    <label>
                                      <em>{child.title} -:</em>
                                    </label>{" "}
                                    {child.permission.map((sbchild, index) => {
                                      return (
                                        <>
                                          <input
                                          id={sbchild.permission_id}
                                            type="checkbox"
                                            checked={sbchild.allowed}
                                            onClick={(event) => {
                                                let id=event.currentTarget.id;
                                                let val=event.currentTarget.checked;
                                                console.log(val);
                                                HandleToggle(Data,id,val)}}
                                          />{" "}
                                          <Label check>{sbchild.title}</Label>
                                          {" "}{","}{" "}
                                        </>
                                      );
                                    })}
                                  </>
                                ) : (
                                  <>
                                    <input
                                    id={child.permission_id}
                                      type="checkbox"
                                      checked={child.allowed}
                                      onClick={(event) => {
                                        let id=event.currentTarget.id;
                                        let val=event.currentTarget.checked;
                                        console.log(val);
                                        HandleToggle(Data,id,val)}}
                                    />{" "}
                                    <Label check>{child.title}</Label>
                                    <br />
                                  </>
                                )}
                              </>
                            );
                          })}
                        </>
                      );
                    })}
                    {/* <Input type="checkbox" /> <Label check>Check me out</Label> */}
                  </FormGroup>
                  <Button>Submit</Button>
                  </>
                }
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
