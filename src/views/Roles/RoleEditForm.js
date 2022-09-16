import { Button, Modal, ModalFooter, ModalBody, ModalHeader, Form, FormGroup, Label, Input } from "reactstrap";
import React, { useEffect, useState } from "react";
import useInput from '../ui/UseInputhook';
const RoleEditForm =(props)=>{


    const [apiError, setApiError] = useState(false);
    const [validationError, setValidationError] = useState(false);
    const [is_active,setIs_active] = useState(false);
    const toggle = () => {
        props.setModal(!props.modal);
        resetTitleInput();
    };
    useEffect(()=>{
      setTitle(props.editdata.role_name);
      setIs_active(props.editdata.is_active);
    },[props.editdata,props.modal])
    const {
        value: enterTitle,
        isValid: enterdTitleIsValid,
        hasError: titleInputHasError,
        valueChangeHandler: titleChangeHandler,
        inputBlurHandler: titleBlurHandler,
        reset: resetTitleInput,
        isTouched: titletouched,
        setEnteredValue:setTitle
    } = useInput((value) => value !== "");



    useEffect(() => {
        if (titleInputHasError) {
            setValidationError(true)
        }
        else {
            setValidationError(false)
        }
    }, [titleInputHasError])
    const titleControlClasses = titleInputHasError
        ? "form-control-alternative is-invalid"
        : "form-control-alternative is-valid";

const is_activeChangeHandler =(e)=>{
setIs_active(e.target.checked)
}
    const formSubmitHandler = () => {
        alert(props.editdata.role_id)
        titleBlurHandler()
        if (enterdTitleIsValid) {
            const apisubmit = async () => {
                const response = await fetch(`http://192.168.1.83:5000/api/role/${props.editdata.role_id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        role_id:props.editdata.role_id,
                        role_name:enterTitle,
                        is_active:is_active,
                    })
                })
                if (!response.ok) {
                    console.log(response);
                    setApiError(true)
                }
                else{
                    const data = await response.json()
                    console.log(data);
                    toggle()
                    props.reload(prev=>!prev)
                    setApiError(false)
                }
               
            }
            apisubmit()

        }
    }


return (<Modal isOpen={props.modal} toggle={toggle}>
    <Form>
        <ModalHeader
            toggle={toggle}>Add Role</ModalHeader>
        <ModalBody>
        <FormGroup>
                <Label for="role_id">Role Id</Label>
                <Input
                    id="role_id"
                    name="role_id"
                    type="Number"
                    value={props.editdata.role_id}
                    disabled
                />
            </FormGroup>
            <FormGroup>
                <Label for="title">Role Name</Label>
                <Input
                    id="title"
                    name="title"
                    placeholder="Role Name"
                    type="text"
                    onChange={titleChangeHandler}
                    onBlur={titleBlurHandler}
                    value={enterTitle}
                    className={titletouched ? titleControlClasses : ''}
                />
            </FormGroup>
            <FormGroup>
                <Label for="is_active">Is Active</Label>
                <br />
                <Input
                    id="is_active"
                    name="is_active"
                   checked={is_active}
                    type="checkbox"
                    onChange={is_activeChangeHandler}
                />
            </FormGroup>
            {validationError && <FormGroup >
                <Label className="text-danger">Validation Error</Label>
            </FormGroup>}
            {apiError && <FormGroup >
                <Label className="text-danger">Api Error</Label>
            </FormGroup>}
        </ModalBody>
        <ModalFooter>
            <Button color="success" onClick={formSubmitHandler}>Update</Button>
            <Button color="danger" onClick={toggle}>Cancel</Button>
        </ModalFooter>
    </Form>
</Modal>)
}
export default RoleEditForm;