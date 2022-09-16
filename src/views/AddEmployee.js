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
  import React, { useEffect, useState } from "react";
  import useInput from "./ui/UseInputhook";
  
  const AddEmployee = (props) => {
    const [Desigination, setDesignations] = useState([]);
    const [Departments, setDepartments] = useState([]);
    const [Roles, setRoles] = useState([]);
    useEffect(async () => {
      const response = await fetch("http://192.168.1.83:5000/api/designation");
      if (!response.ok) {
        return;
      }
      const data = await response.json();
  
      setDesignations(data);
  
      const response2 = await fetch("http://192.168.1.83:5000/api/department");
      if (!response2.ok) {
        return;
      }
      const data2 = await response2.json();
  
      setDepartments(data2);
  
      const response3 = await fetch("http://192.168.1.83:5000/api/role");
      if (!response3.ok) {
        return;
      }
      const data3 = await response3.json();
  
      setRoles(data3);
    }, []);
    const {
      value: enterEmpid,
      isValid: enterdEmpidIsValid,
      hasError: EmpidInputHasError,
      valueChangeHandler: EmpidChangeHandler,
      inputBlurHandler: EmpidBlurHandler,
      reset: resetEmpidInput,
      isTouched: Empidtouched,
    } = useInput((value) => value.trim() !== "");
    const {
      value: enterfName,
      isValid: enterdfNameIsValid,
      hasError: fnameInputHasError,
      valueChangeHandler: fnameChangeHandler,
      inputBlurHandler: fnameBlurHandler,
      reset: resetfNameInput,
      isTouched: fnametouched,
    } = useInput((value) => value.trim() !== "");
    const {
      value: entermName,
      isValid: enterdmNameIsValid,
      hasError: mnameInputHasError,
      valueChangeHandler: mnameChangeHandler,
      inputBlurHandler: mnameBlurHandler,
      reset: resetmNameInput,
      isTouched: mnametouched,
    } = useInput((value) => value.trim() !== "");
    const {
      value: enterLName,
      isValid: enterdLNameIsValid,
      hasError: lnameInputHasError,
      valueChangeHandler: lnameChangeHandler,
      inputBlurHandler: lnameBlurHandler,
      reset: resetLNameInput,
      isTouched: lnametouched,
    } = useInput((value) => value.trim() !== "");
    const {
      value: enterPemail,
      isValid: enterdPemailIsValid,
      hasError: PemailInputHasError,
      valueChangeHandler: PemailChangeHandler,
      inputBlurHandler: PemailBlurHandler,
      reset: resetPemailInput,
      isTouched: Pemailtouched,
    } = useInput((value) => value.trim() !== "" && value.includes("@"));
    const {
      value: enterOemail,
      isValid: enterdOemailIsValid,
      hasError: OemailInputHasError,
      valueChangeHandler: OemailChangeHandler,
      inputBlurHandler: OemailBlurHandler,
      reset: resetOemailInput,
      isTouched: Oemailtouched,
    } = useInput((value) => value.trim() !== "" && value.includes("@"));
    const {
      value: enterSkype,
      isValid: enterdSkypeIsValid,
      hasError: SkypeInputHasError,
      valueChangeHandler: SkypeChangeHandler,
      inputBlurHandler: SkypeBlurHandler,
      reset: resetSkypeInput,
      isTouched: Skypetouched,
    } = useInput((value) => value.trim() !== "");
    const {
      value: enterDoj,
      isValid: enterdDojIsValid,
      hasError: DojInputHasError,
      valueChangeHandler: DojChangeHandler,
      inputBlurHandler: DojBlurHandler,
      reset: resetDojInput,
      isTouched: Dojtouched,
    } = useInput((value) => value.trim() !== "");
    const {
      value: enterDob,
      isValid: enterdDobIsValid,
      hasError: DobInputHasError,
      valueChangeHandler: DobChangeHandler,
      inputBlurHandler: DobBlurHandler,
      reset: resetDobInput,
      isTouched: Dobtouched,
    } = useInput((value) => value.trim() !== "");
    const {
      value: enterDepartment,
      isValid: enterdDepartmentIsValid,
      hasError: DepartmentInputHasError,
      valueChangeHandler: DepartmentChangeHandler,
      inputBlurHandler: DepartmentBlurHandler,
      reset: resetDepartmentInput,
      isTouched: Departmenttouched,
    } = useInput((value) => value.trim() !== "");
    const {
      value: enterDesignation,
      isValid: enterdDesignationIsValid,
      hasError: DesignationInputHasError,
      valueChangeHandler: DesignationChangeHandler,
      inputBlurHandler: DesignationBlurHandler,
      reset: resetDesignationInput,
      isTouched: Designationtouched,
    } = useInput((value) => value.trim() !== "");
    const {
      value: enterRole,
      isValid: enterdRoleIsValid,
      hasError: RoleInputHasError,
      valueChangeHandler: RoleChangeHandler,
      inputBlurHandler: RoleBlurHandler,
      reset: resetRoleInput,
      isTouched: Roletouched,
    } = useInput((value) => value.trim() !== "");
    const {
      value: enterCline1,
      isValid: enterdCline1IsValid,
      hasError: Cline1InputHasError,
      valueChangeHandler: Cline1ChangeHandler,
      inputBlurHandler: Cline1BlurHandler,
      reset: resetCline1Input,
      isTouched: Cline1touched,
    } = useInput((value) => value.trim() !== "");
    const {
      value: enterCline2,
      isValid: enterdCline2IsValid,
      hasError: Cline2InputHasError,
      valueChangeHandler: Cline2ChangeHandler,
      inputBlurHandler: Cline2BlurHandler,
      reset: resetCline2Input,
      isTouched: Cline2touched,
    } = useInput((value) => value.trim() !== "");
    const {
      value: enterCline3,
      isValid: enterdCline3IsValid,
      hasError: Cline3InputHasError,
      valueChangeHandler: Cline3ChangeHandler,
      inputBlurHandler: Cline3BlurHandler,
      reset: resetCline3Input,
      isTouched: Cline3touched,
    } = useInput((value) => value.trim() !== "");
    const {
      value: enterCcity,
      isValid: enterdCcityIsValid,
      hasError: CcityInputHasError,
      valueChangeHandler: CcityChangeHandler,
      inputBlurHandler: CcityBlurHandler,
      reset: resetCcityInput,
      isTouched: Ccitytouched,
    } = useInput((value) => value.trim() !== "");
    const {
      value: enterCstate,
      isValid: enterdCstateIsValid,
      hasError: CstateInputHasError,
      valueChangeHandler: CstateChangeHandler,
      inputBlurHandler: CstateBlurHandler,
      reset: resetCstateInput,
      isTouched: Cstatetouched,
    } = useInput((value) => value.trim() !== "");
    const {
      value: enterPline1,
      isValid: enterdPline1IsValid,
      hasError: Pline1InputHasError,
      valueChangeHandler: Pline1ChangeHandler,
      inputBlurHandler: Pline1BlurHandler,
      reset: resetPline1Input,
      isTouched: Pline1touched,
    } = useInput((value) => value.trim() !== "");
    const {
      value: enterPline2,
      isValid: enterdPline2IsValid,
      hasError: Pline2InputHasError,
      valueChangeHandler: Pline2ChangeHandler,
      inputBlurHandler: Pline2BlurHandler,
      reset: resetPline2Input,
      isTouched: Pline2touched,
    } = useInput((value) => value.trim() !== "");
    const {
      value: enterPline3,
      isValid: enterdPline3IsValid,
      hasError: Pline3InputHasError,
      valueChangeHandler: Pline3ChangeHandler,
      inputBlurHandler: Pline3BlurHandler,
      reset: resetPline3Input,
      isTouched: Pline3touched,
    } = useInput((value) => value.trim() !== "");
    const {
      value: enterPcity,
      isValid: enterdPcityIsValid,
      hasError: PcityInputHasError,
      valueChangeHandler: PcityChangeHandler,
      inputBlurHandler: PcityBlurHandler,
      reset: resetPcityInput,
      isTouched: Pcitytouched,
    } = useInput((value) => value.trim() !== "");
    const {
      value: enterPstate,
      isValid: enterdPstateIsValid,
      hasError: PstateInputHasError,
      valueChangeHandler: PstateChangeHandler,
      inputBlurHandler: PstateBlurHandler,
      reset: resetPstateInput,
      isTouched: Pstatetouched,
    } = useInput((value) => value.trim() !== "");
    const {
      value: enterPhone1,
      isValid: enterdPhone1IsValid,
      hasError: Phone1InputHasError,
      valueChangeHandler: Phone1ChangeHandler,
      inputBlurHandler: Phone1BlurHandler,
      reset: resetPhone1Input,
      isTouched: Phone1touched,
    } = useInput((value) => value.trim() !== "");
    const {
      value: enterPhone2,
      isValid: enterdPhone2IsValid,
      hasError: Phone2InputHasError,
      valueChangeHandler: Phone2ChangeHandler,
      inputBlurHandler: Phone2BlurHandler,
      reset: resetPhone2Input,
      isTouched: Phone2touched,
    } = useInput((value) => value.trim() !== "");
    const {
      value: enteralternatephone,
      isValid: enterdalternatephoneIsValid,
      hasError: alternatephoneInputHasError,
      valueChangeHandler: alternatephoneChangeHandler,
      inputBlurHandler: alternatephoneBlurHandler,
      reset: resetalternatephoneInput,
      isTouched: alternatephonetouched,
    } = useInput((value) => value.trim() !== "");
    let formIsValid = false;
    if (
      enterdEmpidIsValid &&
      enterdfNameIsValid &&
      enterdLNameIsValid &&
      enterdPemailIsValid &&
      enterdOemailIsValid &&
      enterdDobIsValid &&
      enterdDojIsValid &&
      enterdDepartmentIsValid &&
      enterdDesignationIsValid &&
      enterdRoleIsValid
    ) {
      formIsValid = true;
    }
    const EmpidControlClasses = EmpidInputHasError
      ? "form-control-alternative is-invalid"
      : "form-control-alternative is-valid";
    const fnameControlClasses = fnameInputHasError
      ? "form-control-alternative is-invalid"
      : "form-control-alternative is-valid";
    const lnameControlClasses = lnameInputHasError
      ? "form-control-alternative is-invalid"
      : "form-control-alternative is-valid";
    const PemailControlClasses = PemailInputHasError
      ? "form-control-alternative is-invalid"
      : "form-control-alternative is-valid";
    const OemailControlClasses = OemailInputHasError
      ? "form-control-alternative is-invalid"
      : "form-control-alternative is-valid";
  
    const DobControlClasses = DobInputHasError
      ? "form-control-alternative is-invalid"
      : "form-control-alternative is-valid";
    const DojControlClasses = DojInputHasError
      ? "form-control-alternative is-invalid"
      : "form-control-alternative is-valid";
    const DepartmentControlClasses = DepartmentInputHasError
      ? "form-control-alternative is-invalid"
      : "form-control-alternative is-valid";
    const DesignationControlClasses = DesignationInputHasError
      ? "form-control-alternative is-invalid"
      : "form-control-alternative is-valid";
    const RoleControlClasses = RoleInputHasError
      ? "form-control-alternative is-invalid"
      : "form-control-alternative is-valid";
    const CcityControlClasses = CcityInputHasError
      ? "form-control-alternative is-invalid"
      : "form-control-alternative is-valid";
    const CstateControlClasses = CstateInputHasError
      ? "form-control-alternative is-invalid"
      : "form-control-alternative is-valid";
    const PcityControlClasses = PcityInputHasError
      ? "form-control-alternative is-invalid"
      : "form-control-alternative is-valid";
    const PstateControlClasses = PstateInputHasError
      ? "form-control-alternative is-invalid"
      : "form-control-alternative is-valid";
    const apisubmit = async () => {
      const response = await fetch("http://192.168.1.83:5000/api/employee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          employee_id: Number(enterEmpid),
          firstname: enterfName,
          middlename: entermName,
          lastname: enterLName,
          personalemail: enterPemail,
          officeemail: enterOemail,
          skypeid: enterSkype,
          currentaddressline1: enterCline1,
          currentaddressline2: enterCline2,
          currentaddressline3: enterCline3,
          currentcity: enterCcity,
          currentstate: enterCstate,
          permanentaddreaaline1: enterPline1,
          permanentaddreaaline2: enterPline2,
          permanentaddreaaline3: enterPline3,
          city: enterPcity,
          state: enterPstate,
          phone1: enterPhone1,
          phone2: enterPhone2,
          alternatephone: enteralternatephone,
          panno: "",
          pfno: "",
          doj: enterDoj,
          dob: enterDob,
          designation_id: Number(enterDesignation),
          department_id: Number(enterDepartment),
          role_id: Number(enterRole),
          emergencycontact: "",
          emergencycontactperson: "",
          bloodgroup: "",
          personrelation: "",
          basicpay: 0,
          currentsalary: 0,
          fathername: "",
          mothername: "",
        }),
      });
      if (!response.ok) {
        console.log(response);
      } else {
        const data = await response.json();
        console.log(data);
      }
    };
    const onSubmitHandler = (event) => {
      if (!formIsValid) {
        EmpidBlurHandler();
        fnameBlurHandler();
        lnameBlurHandler();
        PemailBlurHandler();
        OemailBlurHandler();
        DojBlurHandler();
        DobBlurHandler();
        DepartmentBlurHandler();
        DesignationBlurHandler();
        CcityBlurHandler();
        CstateBlurHandler();
        PcityBlurHandler();
        PstateBlurHandler();
  
        return;
      }
      apisubmit();
      console.log("submitted!");
      console.log(
        enterEmpid,
        enterfName,
        enterLName,
        entermName,
        enterPemail,
        enterOemail,
        enterSkype,
        enterDoj,
        enterDob,
        enterDepartment,
        enterDesignation,
        enterCline1,
        enterCline2,
        enterCline3,
        enterCcity,
        enterCstate,
        enterPline1,
        enterPline2,
        enterPline3,
        enterPcity,
        enterPstate,
        enterPhone1,
        enterPhone2,
        enteralternatephone
      );
      resetEmpidInput();
      resetfNameInput();
      resetmNameInput();
      resetLNameInput();
      resetPemailInput();
      resetOemailInput();
      resetSkypeInput();
      resetDobInput();
      resetDojInput();
      resetDepartmentInput();
      resetDesignationInput();
      resetCline1Input();
      resetCline2Input();
      resetCline3Input();
      resetCcityInput();
      resetCstateInput();
      resetPline1Input();
      resetPline2Input();
      resetPline3Input();
      resetPcityInput();
      resetPstateInput();
      resetalternatephoneInput();
      resetPhone1Input();
      resetPhone2Input();
    };
  
    return (
      <Row>
        <Col>
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-bell me-2"> </i>
              Add New Employee
            </CardTitle>
            <CardBody>
              <Form>
                <Row>
                  <Col sm="12" lg="2">
                    <FormGroup>
                      <Label for="Empid">Employee Id</Label>
                      <Input
                        id="Empid"
                        name="Empid"
                        placeholder="Employee Id"
                        type="number"
                        onChange={EmpidChangeHandler}
                        onBlur={EmpidBlurHandler}
                        value={enterEmpid}
                        className={Empidtouched && EmpidControlClasses}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="12" lg="4">
                    <FormGroup>
                      <Label for="Fname">First Name</Label>
                      <Input
                        id="Fname"
                        name="Fname"
                        placeholder="First Name"
                        type="text"
                        onChange={fnameChangeHandler}
                        onBlur={fnameBlurHandler}
                        value={enterfName}
                        className={fnametouched && fnameControlClasses}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="12" lg="2">
                    <FormGroup>
                      <Label for="Fname">Middle Name</Label>
                      <Input
                        id="mname"
                        name="mname"
                        placeholder="Middle Name"
                        type="text"
                        onChange={mnameChangeHandler}
                        onBlur={mnameBlurHandler}
                        value={entermName}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="12" lg="4">
                    <FormGroup>
                      <Label for="Fname">Last Name</Label>
                      <Input
                        id="lname"
                        name="lname"
                        placeholder="Last Name"
                        type="text"
                        onChange={lnameChangeHandler}
                        onBlur={lnameBlurHandler}
                        value={enterLName}
                        className={lnametouched && lnameControlClasses}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" lg="4">
                    <FormGroup>
                      <Label for="Pemail">Personal Email</Label>
                      <Input
                        id="Pemail"
                        name="Pemail"
                        placeholder="Personal Email"
                        type="Email"
                        onChange={PemailChangeHandler}
                        onBlur={PemailBlurHandler}
                        value={enterPemail}
                        className={Pemailtouched && PemailControlClasses}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="12" lg="4">
                    <FormGroup>
                      <Label for="Oemail">Office Email</Label>
                      <Input
                        id="Oemail"
                        name="Oemail"
                        placeholder="Office Email"
                        type="Email"
                        onChange={OemailChangeHandler}
                        onBlur={OemailBlurHandler}
                        value={enterOemail}
                        className={Oemailtouched && OemailControlClasses}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="12" lg="4">
                    <FormGroup>
                      <Label for="skype">Skype Id</Label>
                      <Input
                        id="skype"
                        name="skype"
                        placeholder="Skype Id"
                        type="text"
                        onChange={SkypeChangeHandler}
                        onBlur={SkypeBlurHandler}
                        value={enterSkype}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" lg="6">
                    <FormGroup>
                      <Label for="Dob">Date of Birth</Label>
                      <Input
                        id="Dob"
                        name="Dob"
                        placeholder="Date of Birth"
                        type="date"
                        onChange={DobChangeHandler}
                        onBlur={DobBlurHandler}
                        value={enterDob}
                        className={Dobtouched && DobControlClasses}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="12" lg="6">
                    <FormGroup>
                      <Label for="Doj">Date of Joining</Label>
                      <Input
                        id="Doj"
                        name="Doj"
                        placeholder="Date of Joining"
                        type="date"
                        onChange={DojChangeHandler}
                        onBlur={DojBlurHandler}
                        value={enterDoj}
                        className={Dojtouched && DojControlClasses}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" lg="4">
                    <FormGroup>
                      <Label for="Department">Department</Label>
                      <Input
                        id="Department"
                        name="Department"
                        placeholder="Department"
                        type="select"
                        onChange={DepartmentChangeHandler}
                        onBlur={DepartmentBlurHandler}
                        value={enterDepartment}
                        className={Departmenttouched && DepartmentControlClasses}
                      >
                        <option value="">Select</option>
                        {Departments.map((item, index) => {
                          return (
                            item.is_active && (
                              <option value={item.department_id} key={index}>
                                {item.name}
                              </option>
                            )
                          );
                        })}
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col sm="12" lg="4">
                    <FormGroup>
                      <Label for="Designation">Designation</Label>
                      <Input
                        id="Designation"
                        name="Designation"
                        placeholder="Designation "
                        type="select"
                        onChange={DesignationChangeHandler}
                        onBlur={DesignationBlurHandler}
                        value={enterDesignation}
                        className={
                          Designationtouched && DesignationControlClasses
                        }
                      >
                        {" "}
                        <option value="">Select</option>
                        {Desigination.map((item, index) => {
                          return (
                            item.is_active && (
                              <option value={item.designation_id} key={index}>
                                {item.name}
                              </option>
                            )
                          );
                        })}
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col sm="12" lg="4">
                    <FormGroup>
                      <Label for="Role">Role</Label>
                      <Input
                        id="Role"
                        name="Role"
                        placeholder="Role "
                        type="select"
                        onChange={RoleChangeHandler}
                        onBlur={RoleBlurHandler}
                        value={enterRole}
                        className={Roletouched && RoleControlClasses}
                      >
                        {" "}
                        <option value="">Select</option>
                        {Roles.map((item, index) => {
                          return (
                            item.is_active && (
                              <option value={item.role_id} key={index}>
                                {item.role_name}
                              </option>
                            )
                          );
                        })}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <FormGroup tag="fieldset">
                    <legend>Current Address</legend>
                    <Row>
                      <Col sm="12" lg="4">
                        <FormGroup>
                          <Label for="Cline1">Line 1</Label>
                          <Input
                            id="Cline1"
                            name="Cline1"
                            placeholder="Address Line 1"
                            type="text"
                            onChange={Cline1ChangeHandler}
                            onBlur={Cline1BlurHandler}
                            value={enterCline1}
                          />
                        </FormGroup>
                      </Col>
                      <Col sm="12" lg="4">
                        <FormGroup>
                          <Label for="Cline2">Line 2</Label>
                          <Input
                            id="Cline2"
                            name="Cline2"
                            placeholder="Address line 2"
                            type="text"
                            onChange={Cline2ChangeHandler}
                            onBlur={Cline2BlurHandler}
                            value={enterCline2}
                          />
                        </FormGroup>
                      </Col>
                      <Col sm="12" lg="4">
                        <FormGroup>
                          <Label for="Cline3">Line 3</Label>
                          <Input
                            id="Cline3"
                            name="Cline3"
                            placeholder="Address line 3"
                            type="text"
                            onChange={Cline3ChangeHandler}
                            onBlur={Cline3BlurHandler}
                            value={enterCline3}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="12" lg="6">
                        <FormGroup>
                          <Label for="Ccity">City</Label>
                          <Input
                            id="Ccity"
                            name="Ccity"
                            placeholder="City"
                            type="text"
                            onChange={CcityChangeHandler}
                            onBlur={CcityBlurHandler}
                            value={enterCcity}
                            className={Ccitytouched && CcityControlClasses}
                          />
                        </FormGroup>
                      </Col>
                      <Col sm="12" lg="6">
                        <FormGroup>
                          <Label for="Cstate">State</Label>
                          <Input
                            id="Cstate"
                            name="Cstate"
                            placeholder="State"
                            type="text"
                            onChange={CstateChangeHandler}
                            onBlur={CstateBlurHandler}
                            value={enterCstate}
                            className={Cstatetouched && CstateControlClasses}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup tag="fieldset">
                    <legend>Permanent Address</legend>
                    <Row>
                      <Col sm="12" lg="4">
                        <FormGroup>
                          <Label for="Pline1">Line 1</Label>
                          <Input
                            id="Pline1"
                            name="Pline1"
                            placeholder="Address Line 1"
                            type="text"
                            onChange={Pline1ChangeHandler}
                            onBlur={Pline1BlurHandler}
                            value={enterPline1}
                          />
                        </FormGroup>
                      </Col>
                      <Col sm="12" lg="4">
                        <FormGroup>
                          <Label for="Pline2">Line 2</Label>
                          <Input
                            id="Pline2"
                            name="Pline2"
                            placeholder="Address line 2"
                            type="text"
                            onChange={Pline2ChangeHandler}
                            onBlur={Pline2BlurHandler}
                            value={enterPline2}
                          />
                        </FormGroup>
                      </Col>
                      <Col sm="12" lg="4">
                        <FormGroup>
                          <Label for="Pline3">Line 3</Label>
                          <Input
                            id="Pline3"
                            name="Pline3"
                            placeholder="Address line 3"
                            type="text"
                            onChange={Pline3ChangeHandler}
                            onBlur={Pline3BlurHandler}
                            value={enterPline3}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="12" lg="6">
                        <FormGroup>
                          <Label for="Pcity">City</Label>
                          <Input
                            id="Pcity"
                            name="Pcity"
                            placeholder="City"
                            type="text"
                            onChange={PcityChangeHandler}
                            onBlur={PcityBlurHandler}
                            value={enterPcity}
                            className={Pcitytouched && PcityControlClasses}
                          />
                        </FormGroup>
                      </Col>
                      <Col sm="12" lg="6">
                        <FormGroup>
                          <Label for="Pstate">State</Label>
                          <Input
                            id="Pstate"
                            name="Pstate"
                            placeholder="State"
                            type="text"
                            onChange={PstateChangeHandler}
                            onBlur={PstateBlurHandler}
                            value={enterPstate}
                            className={Pstatetouched && PstateControlClasses}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup tag="fieldset">
                    <legend>Contact Details</legend>
                    <Row>
                      <Col sm="12" lg="4">
                        <FormGroup>
                          <Label for="Phone1">Phone 1</Label>
                          <Input
                            id="Phone1"
                            name="Phone1"
                            placeholder="Phone 1"
                            type="text"
                            onChange={Phone1ChangeHandler}
                            onBlur={Phone1BlurHandler}
                            value={enterPhone1}
                          />
                        </FormGroup>
                      </Col>
                      <Col sm="12" lg="4">
                        <FormGroup>
                          <Label for="Phone2">Phone 2</Label>
                          <Input
                            id="Phone2"
                            name="Phone2"
                            placeholder="Phone 2"
                            type="text"
                            onChange={Phone2ChangeHandler}
                            onBlur={Phone2BlurHandler}
                            value={enterPhone2}
                          />
                        </FormGroup>
                      </Col>
                      <Col sm="12" lg="4">
                        <FormGroup>
                          <Label for="alternatephone">Alternate Phone</Label>
                          <Input
                            id="alternatephone"
                            name="alternatephone"
                            placeholder="Alternate Phone"
                            type="text"
                            onChange={alternatephoneChangeHandler}
                            onBlur={alternatephoneBlurHandler}
                            value={enteralternatephone}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </FormGroup>
                </Row>
  
              
                <Button onClick={onSubmitHandler}>Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };
  
  export default AddEmployee;
  