import styled from "styled-components";

export const AuthenticationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  .form {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: auto;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    .input {
      margin-bottom: 1rem;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .button {
      padding: 0.5rem;
      background: #0070f3;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;
