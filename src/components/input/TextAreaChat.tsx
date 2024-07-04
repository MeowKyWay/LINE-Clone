import styled from 'styled-components';

export const TextAreaChat = styled.textarea`
  height: 150px;
  padding: 1rem;
  background-color: transparent;
  width: 100%;
  &::placeholder {
    color: #555555;
    font-size: 14px;
  }
  &:focus {
    outline: none;
    border-color: initial;
  }
`;