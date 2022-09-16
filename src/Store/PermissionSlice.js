import { createSlice } from '@reduxjs/toolkit';

const Permission = [
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
          title: "add Employee",
          allowed: false,
          href:'/Addemployee'
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
          title: "Roles",
          allowed: false,
          href:'/Roles'
        },
        {
          title: "form permission",
          permission: [
            {
              permission_id: 25,
              title: "user wise",
              allowed: false,
              href:'/PermissionForm'
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
  ];

const PermissionSlice=createSlice({
    name:'permissions',
    initialState:Permission,
    reducers:{
        ValidatePermissions(state,action){
            state.forEach(element => {
                element.permission.forEach(sbel => {
                  //2nd level nesting
                  if(sbel.permission){
                    // console.log(sbel);
                    sbel.permission.forEach(sbel2 => {
                      action.payload.forEach(up => {       
                          if(sbel2.permission_id===up.permission_id){
                            sbel2.allowed=true;
                        }  
                       });   
                    });
                  }
                  else{
                   action.payload.forEach(up => {
                    if(sbel.permission_id===up.permission_id){
                        sbel.allowed=true;
                    }
                   });
                  }
                });
            });
        }
      //   HandlerToggle(state,action){
      //     state.forEach(element => {
      //       console.log(state);
      //   element.permission.forEach(sbelem => {
      //       if(sbelem.permission){
      //           sbelem.permission.forEach(child => {
      //               if(Number(child.permission_id)===Number(action.payload.id)){
      //                   console.log(child.allowed);
      //                   child.allowed=action.payload.val;
      //               }
      //           });
      //       }
      //       else{
      //           if(Number(sbelem.permission_id)===Number(action.payload.id)){
      //               console.log(sbelem.allowed);
      //               sbelem.allowed=action.payload.val;
      //           }
      //       }
      //   });
      // });
      //   }
    }
})

export const PermissionActions=PermissionSlice.actions;
export default PermissionSlice;