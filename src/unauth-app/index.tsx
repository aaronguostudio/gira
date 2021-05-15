import { Card, Divider } from "antd"
import { useState } from "react"
import { LoginScreen } from "./login"
import { RegisterScreen } from "./register"
import styled from '@emotion/styled'
import logo from 'assets/logo.png'
import left from 'assets/left.svg'
import right from 'assets/right.svg'

export const UnauthApp = () => {
  const [isRegister, setIsRegister] = useState(false)
  return (
    <Container>
      <Header />
      <Background />
      <ShadowCard>
        <Title>{ isRegister ? 'Login' : 'Register' }</Title>
        { isRegister ? <LoginScreen /> : <RegisterScreen /> }

        <Divider />

        <Link onClick={() => setIsRegister(!isRegister)}>
          Switch to { isRegister ? 'Register' : 'Login' }
        </Link>
      </ShadowCard>
    </Container>
  )
}

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem), calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  background-image: url(${left}), url(${right});
`

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgba(94, 108, 132);
`

const Link = styled.div`
  color: rgba(94, 108, 132);
  cursor: pointer;
`

const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 12rem;
  width: 100%;
`

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: .3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, .1) 0 0 3px;
  text-align: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`
