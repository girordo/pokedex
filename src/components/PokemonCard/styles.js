import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Sprite = styled.img`
  width: 5em;
  height: 5em;
  display: none;
`;

const spin = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`;

export const Spinner = styled.div`
  height: 25px;
  width: 25px;
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  border-left-color: #22a6b3;
  animation: ${spin} 0.5s linear infinite;
`;

export const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.14), 0 1px 2px rgba(0, 0, 0, 0.28);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.36), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  -moz-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
