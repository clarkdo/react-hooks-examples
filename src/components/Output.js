import styled from "styled-components";

const Output = styled.div`
  width: 100%;
  background-color: ${(props) => props.color || "#fa923f"};
  color: white;
  font-size: 1.8rem;
  text-align: center;
  padding: 20px 0;
  box-sizing: border-box;
`;

export default Output;
