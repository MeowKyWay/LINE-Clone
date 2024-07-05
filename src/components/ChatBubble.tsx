import styled from 'styled-components';

export const UserChat = styled.div`
  position: relative;
  max-width: 18rem;
  padding: 0.75rem;
  background-color: #86d97b;
  border-radius: 0.5rem;
  word-break: break-word;
  &::after {
    content: '';
    position: absolute;
    right: -8px;
    top: 15px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-left-color: #86d97b;
    border-right: 0;
    border-bottom: 0;
    margin-top: -5px;
  }
`;

interface ReceiverChatprops {
    backgroundColor: string;
    color: string;
}

export const ReceiverChat = styled.div<ReceiverChatprops>`
  position: relative;
  max-width: 18rem;
  padding: 0.75rem;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: 0.5rem;
  word-break: break-word;
  &::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 15px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-right-color: ${(props) => props.backgroundColor};
    border-left: 0;
    border-bottom: 0;
    margin-top: -5px;
  }
`;
