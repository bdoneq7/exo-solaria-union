import { Modal, Button,InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface ModalProps {
    text: string
    variant: "primary" | "secondary" | "danger";
    isSignupFlow: boolean
}

const ErrorMessage = styled.p`
color: red
`

const ModalComponent = ({ text, variant, isSignupFlow }: ModalProps) => {

    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () =>setShow(true);

    const navigate = useNavigate();

    const handleClick = async () => {
        let data;
        if(isSignupFlow){
            const {data: signUpData} = await axios.post("http://localhost:8080/auth/signup", {
                email,
                password
            });
            data = signUpData
        } else {
            const {data: loginData} = await axios.post("http://localhost:8080/auth/login", {
                email,
                password
            });
            data = loginData
        }

        if(data.errors.length) {
            return setErrorMsg(data.errors[0].msg);
        }

        localStorage.setItem("token", data.data.token);
        navigate("/dashboard")
    };

    return (
    <>
        <Button onClick={handleShow} variant={variant} style={{ marginRight: "10px", marginTop: "10px"}}>{text}</Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>{text}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Email</InputGroup.Text>
                    <FormControl type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Password (8 Character Min)</InputGroup.Text>
                    <FormControl type="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} />
                </InputGroup>
                {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleClick}>{text}</Button>
            </Modal.Footer>
        </Modal>
    </>
    )
}

export default ModalComponent