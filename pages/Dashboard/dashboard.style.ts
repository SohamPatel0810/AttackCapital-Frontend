import styled from "styled-components";
import Modal from "react-modal";

export const DashboardWrapper = styled.div`
  padding: 2rem;
  .new-post {
    padding: 0.5rem 1rem;
    background: #0070f3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const ModalWrapper = styled(Modal)`
  margin-bottom: 2rem;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .input {
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }
`;
