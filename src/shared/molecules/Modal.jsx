import React from "react";
import { ToastContainer, toast } from "react-toastify";
// Styles
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";

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
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  transform: scale(0.5);
  transition: 0.4s all;
  width: 50vw;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &.active {
    transform: scale(1);
  }
  @media (max-width: 767px) {
    height: 80vh;
    width: 90vw;
    max-width: 90vw;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #61ac65;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: teal;
  }
`;

export const ModalWindow = ({ active, setActive }) => {
  return (
    <Modal className={active ? "active" : ""} onClick={() => setActive(false)}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ModalContent
        className={active ? "active" : ""}
        onClick={(e) => e.stopPropagation()}
      >
        <Form>
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
        </Form>
      </ModalContent>
    </Modal>
  );
};
