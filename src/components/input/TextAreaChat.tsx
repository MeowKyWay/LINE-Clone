import styled from 'styled-components';

export const TextAreaChat = styled.textarea`
  height: 110px;
  padding: 1rem;
  background-color: transparent;
  width: 100%;
  resize: none;
  &::placeholder {
    color: #555555;
    font-size: 14px;
  }
  &:focus {
    outline: none;
    border-color: initial;
  }
`;