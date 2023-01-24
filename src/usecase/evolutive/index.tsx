import React from 'react'
import { Header } from "../../header";
import { Container, ContentWrapper, Status, Wrapper } from "../styles";
import { useFlag } from "./useFlag";
import { ComponentV1 } from "./v1/component-v1";
import { ComponentV2 } from "./v2/component-v2";
import { ButtonGroup, Button } from '@mui/material';

const FALLBACK_VERSION = 'v1'

const makeButtonStyle = (disabled: boolean): React.CSSProperties => (disabled ? {
  backgroundColor: 'gray',
  width: '100px'
} : { width: '100px' })

export const Evolutive = () => {
  const { available, version, toggle } = useFlag();

  const Component = React.useCallback(() => {
    const allowedVersion = version ?? FALLBACK_VERSION
    const Component = allowedVersion === 'v2' ? ComponentV2 : ComponentV1
    return available ? <Component /> : <ComponentV1 />
  }, [available, version])

  return (
    <Container>
      <Header />
      <ContentWrapper>
        <h1>Evolutive</h1>
        <h3>Refers to a feature that already implemented and needs to be updated</h3>
        <ButtonGroup variant="contained">
          <Button onClick={toggle} style={makeButtonStyle(version === 'v1')}>v1</Button>
          <Button onClick={toggle} style={makeButtonStyle(version === 'v2')}>v2</Button>
        </ButtonGroup>
        <h4>
          Version: {'{ available: '}
          <Status valid={Boolean(available)}>{String(available)}</Status>
          {`, version: ${version} }`}
        </h4>

      </ContentWrapper>
      <Wrapper>
        <Component />
      </Wrapper>
    </Container>
  );
};
