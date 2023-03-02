import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;

  & li {
    margin: 0 20px;
  }

  & a {
    color: gray;
    font-weight: 700;
    text-decoration: none;
  }
`;

const Divider = styled.div`
  width:  1px;
  height: 10px;
  background-color: gray;
`;

export const Header = () => {
  return (
    <div>
      <h1>Flag System - Examples</h1>
      <List>
        <li>
          <Link to="/">Home</Link>
        </li>
        <Divider />
        <li>
          <Link to="/exclusive">Exclusive</Link>
        </li>
        <li>
          <Link to="/evolutive">Evolutive</Link>
        </li>
        <li>
          <Link to="/exclusive-evolutive">Exclusive/Evolutive</Link>
        </li>
        <Divider />
        <li>
          <Link to="/exclusive-evolutive">Context</Link>
        </li>
      </List>
    </div>
  );
};
