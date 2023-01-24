import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;

  & li {
    margin: 0 20px;
  }

  & a {
    color: gray;
    font-weight: 700;
    text-decoration: none;
  }
`;

export const Header = () => {
  return (
    <div>
      <h1>NG - Flag System - Examples</h1>
      <List>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/exclusive">Exclusive</Link>
        </li>
        <li>
          <Link to="/evolutive">Evolutive</Link>
        </li>
      </List>
    </div>
  );
};
