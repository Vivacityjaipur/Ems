import { Button, Modal, ModalFooter, ModalBody, ModalHeader, Form, FormGroup, Label, Input } from "reactstrap";
import React, { useEffect, useState } from "react";
import useInput from '../ui/UseInputhook';
const RoleAddForm = (props) => {


    const [apiError, setApiError] = useState(false);
    const [validationError, setValidationError] = useState(false);
    const toggle = () => {
        props.setModal(!props.modal);
        resetTitleInput();
    };
    const {
        value: enterTitle,
        isValid: enterdTitleIsValid,
        hasError: titleInputHasError,
        valueChangeHandler: titleChangeHandler,
        inputBlurHandler: titleBlurHandler,
        reset: resetTitleInput,
        isTouched: titletouched,
    } = useInput((value) => value.trim() !== "");



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


    const formSubmitHandler = () => {
        titleBlurHandler()
        if (enterdTitleIsValid) {
            const apisubmit = async () => {
                const response = await fetch('http://192.168.1.83:5000/api/role', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        role_name: enterTitle,
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
                {validationError && <FormGroup >
                    <Label className="text-danger">Validation Error</Label>
                </FormGroup>}
                {apiError && <FormGroup >
                    <Label className="text-danger">Api Error</Label>
                </FormGroup>}
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={formSubmitHandler}>Add</Button>
                <Button color="danger" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Form>
    </Modal>)
}
export default RoleAddForm;