import styled from '@emotion/styled'
import { Row } from 'components/lib'
import { useAuth } from 'context/auth-context'
import { ProjectListScreen } from 'screens/project-list'
import { STYLES } from 'styles/common'

export const AuthApp = () => {
  const { logout } = useAuth()
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </HeaderLeft>
        <HeaderRight>
          <button onClick={logout}>Logout</button>
        </HeaderRight>
      </Header>
      <Left>
        {/*  */}
      </Left>
      <Main>
        <ProjectListScreen />
      </Main>
      <Right>
        {/*  */}
      </Right>
      <Footer>
        Gira all rights reseved.
      </Footer>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  height: calc(100vh - ${STYLES.pageHeader});
  grid-template-rows: 6rem 1fr 2rem;
  grid-template-columns: 20rem 1fr 20rem;
  grid-template-areas:
  "header header header"
  "left main right"
  "footer footer footer"
`;

const Header = styled(Row)`
  grid-area: header;
  box-shadow: ${STYLES.shadow1};
  z-index: 1;
  padding: 0 2rem;
`;

const Main = styled.header`
  grid-area: main;
  padding: 2rem;
`;

const Left = styled.header`
  grid-area: left;
`;

const Right = styled.header`
  grid-area: right;
`;

const Footer = styled.header`
  grid-area: footer;
`;

const HeaderLeft = styled(Row)``

const HeaderRight = styled.div``
