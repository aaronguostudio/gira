import styled from '@emotion/styled'
import { Row } from 'components/lib'
import { useAuth } from 'context/auth-context'
import { ProjectListScreen } from 'screens/project-list'
import { STYLES } from 'styles/common'
import logo from 'assets/logo.png'
import { Button, Dropdown, Menu } from 'antd'

export const AuthApp = () => {
  const { logout, user } = useAuth()
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <img src={logo} width={STYLES.size100} alt={'logo'} />
          <div>Projects</div>
          <div>Users</div>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown overlay={
            <Menu>
              <Menu.Item key={'logout'}>
              <Button onClick={logout} type={"link"}>
                Logout
              </Button>
              </Menu.Item>
            </Menu>
          }>
            <Button type={"link"} onClick={(e) => e.preventDefault()}>
              Hi. { user?.name }
            </Button>
          </Dropdown>
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
  box-shadow: ${STYLES.shadow3};
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
