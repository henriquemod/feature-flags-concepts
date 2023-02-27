import styled from "styled-components";

export interface FlagReturn {
  available: boolean;
  version?: string;
}

interface IAvailable {
  valid: boolean;
}

export interface ILabel {
  color?: "success" | "error" | "warning";
}

export const ConsoleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & h4 {
    margin: 20px 10px;
  }
`;

export const Label = styled.span<ILabel>`
  color: ${(props) => {
    switch (props.color) {
      case "success":
        return "green";
      case "warning":
        return "orange";
      case "error":
        return "red";
      default:
        return "unset";
    }
  }};
`;

export const Status = styled.span<IAvailable>`
  color: ${(props) => (props.valid ? "green" : "red")};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

export const Wrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  min-width: 400px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  align-self: center;
`;

export const Button = styled.button`
  width: 150px;
  min-height: 50px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  :hover {
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.2);
    position: relative;
    left: -1px;
    top: -1px;
    cursor: pointer;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;

  & li {
    margin: 15px 0;

    :hover {
      cursor: pointer;
    }

    & span {
      font-weight: 700;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
