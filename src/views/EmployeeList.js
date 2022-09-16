import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import React, { useState, useEffect } from "react";
const EmployeeList = () => {
  const [Employee, setEmployee] = useState([]);
  useEffect(async () => {
    const response = await fetch("http://192.168.1.83:5000/api/employee");
    if (!response.ok) {
      console.log(response);
      return;
    }
    const data = await response.json();
    console.log(data);
    setEmployee(data);
  }, []);

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Employee List</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of Employee List
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Emp Id</th>
                <th>Employee</th>
                <th>Date of Joining</th>

                <th>Contact</th>
                <th>Active</th>
                <th>Designation</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {Employee.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>{tdata.employee_id}</td>
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <div className="ms-3">
                        <h6 className="mb-0">
                          {tdata.firstname + " " + tdata.lastname}
                        </h6>
                        <span className="text-muted">{tdata.officeemail}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.doj}</td>
                  <td>{tdata.phone1}</td>
                  <td>
                    {tdata.is_active ? (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  {console.log(tdata)}
                  <td>{tdata.designation_id}</td>
                  <td>{tdata.department_id}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default EmployeeList;
