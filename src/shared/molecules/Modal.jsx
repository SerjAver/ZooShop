import React, { useState } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
// Styles
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { Formik } from "formik";

const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.3s;

  &.active {
    opacity: 1;
    pointer-events: all;
  }
`;

const ModalContent = styled.div`
  position: fixed;
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  transform: scale(0.5);
  transition: 0.4s all;
  width: 96vw;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: 85%;
  max-height: 85%;
  &:hover {
    background-color: #d4dfcf;
  }

  &.active {
    transform: scale(1);
  }

  @media (max-width: 767px) {
    height: 94%;
    max-height: 94%;
    padding: 20px;
  }
`;

const OurForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
  width: 100%;
  max-width: 100%
  font-size: 20px;
 
  @media (max-width: 767px) {
    height: 99%;
    max-height: 99%;
  }
`;

const LabelForm = styled.label`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 10px;
  width: 100%;
`;

const Button = styled.button`
  background-color: #61ac65;
  color: #fff;
  padding: 5px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: teal;
  }
`;

const RequiredMessage = styled.p`
  font-size: 14px;
  position: relative;
`;

const ErrorContainer = styled.div`
  max-height: 40px;
  overflow: hidden;
  color: #ff0000;
  margin-bottom: -8px;
  margin-top: 7px;
  position: relative;
  bottom: 28px;
`;

const CloseButton = styled.button`
  @media (max-width: 768px), (max-height: 360px) {
    position: relative;
    cursor: pointer;
    bottom: 348px;
    left: 152px;
    width: 26px;
    height: 26px;
    border-radius: 38%;
    background-color: #ff6b6b;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    border: none;
    outline: none;
    transition:
      background-color 0.2s,
      transform 0.2s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: #ff4f4f;
    }

    &:active {
      transform: translateY(2px);
      box-shadow: none;
    }
  }
`;
export const ModalWindow = ({ active, setActive }) => {
  const [setShowResults] = useState(false);
  const phoneRegExp = /^[0-9]{10}$/;
  const validationsSchema = yup.object().shape({
    name: yup.string().typeError("there should be a line here").required("*"),
    secondName: yup
      .string()
      .typeError("there should be a line here")
      .required("*"),
    password: yup
      .string()
      .typeError("there should be a line here")
      .required("*"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "passwords do not match")
      .required("*"),
    email: yup.string().email("Enter the correct email").required("*"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number must be 10 digits")
      .required("Phone number is required"),
  });
  return (
    <Modal className={active ? "active" : ""} onClick={() => setActive(false)}>
      <CloseButton onClick={() => setShowResults(false)}>х</CloseButton>
      <ModalContent
        className={active ? "active" : ""}
        onClick={(e) => e.stopPropagation()}
      >
        <Formik
          initialValues={{
            name: "",
            secondName: "",
            password: "",
            confirmPassword: "",
            email: "",
            phone: "",
          }}
          validateOnBlur
          onSubmit={(values) => {
            console.log(values);
            toast.success("The order is placed, wait for our call", {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }}
          validationSchema={validationsSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) => {
            return (
              <OurForm>
                <RequiredMessage>
                  <LabelForm htmlFor={"name"}>Name</LabelForm>
                  <Input
                    type={"text"}
                    name={"name"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </RequiredMessage>
                {touched.name && errors.name && (
                  <ErrorContainer>{errors.name}</ErrorContainer>
                )}
                <RequiredMessage>
                  <LabelForm htmlFor={"secondName"}>SecondName</LabelForm>
                  <Input
                    type={"text"}
                    name={"secondName"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.secondName}
                  />
                </RequiredMessage>
                {touched.secondName && errors.secondName && (
                  <ErrorContainer>{errors.secondName}</ErrorContainer>
                )}
                <RequiredMessage>
                  <LabelForm htmlFor={"password"}>Password</LabelForm>
                  <Input
                    type={"password"}
                    name={"password"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </RequiredMessage>
                {touched.password && errors.password && (
                  <ErrorContainer>{errors.password}</ErrorContainer>
                )}
                <RequiredMessage>
                  <LabelForm htmlFor={"confirmPassword"}>
                    Confirm password
                  </LabelForm>
                  <Input
                    type={"password"}
                    name={"confirmPassword"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                  />
                </RequiredMessage>
                {touched.confirmPassword && errors.confirmPassword && (
                  <ErrorContainer>{errors.confirmPassword}</ErrorContainer>
                )}
                <RequiredMessage>
                  <LabelForm htmlFor={"email"}>Email</LabelForm>
                  <Input
                    type={"email"}
                    name={"email"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </RequiredMessage>
                {touched.email && errors.email && (
                  <ErrorContainer>{errors.email}</ErrorContainer>
                )}
                <RequiredMessage>
                  <LabelForm htmlFor={"phone"}>Phone</LabelForm>
                  <Input
                    type={"number"}
                    name={"phone"}
                    placeholder="+380"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                </RequiredMessage>
                {touched.phone && errors.phone && (
                  <ErrorContainer>{errors.phone}</ErrorContainer>
                )}

                <Button
                  disabled={!isValid && !dirty}
                  onClick={handleSubmit}
                  type={"submit"}
                >
                  send
                </Button>
              </OurForm>
            );
          }}
        </Formik>
      </ModalContent>
    </Modal>
  );
};

{
  /* <Form>
          <Label>Name:</Label>
          <Input type="text" />

          <Label>Surname:</Label>
          <Input type="text" />

          <Label>Email:</Label>
          <Input type="email" />

          <Label>Phone:</Label>
          <Input type="tel" />

          <Button
            onClick={(e) => {
              e.preventDefault();
              toast.success("The order is placed, wait for our call", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }}
          >
            Make an order
          </Button>
        </Form> */
}
