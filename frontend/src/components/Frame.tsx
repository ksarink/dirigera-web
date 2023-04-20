import React, { useContext } from 'react'
import { BsFillHouseFill } from 'react-icons/bs'
import { Link, Outlet } from 'react-router-dom'
import { Col, Layout, Row, Typography } from 'antd'
import { AuthContext } from './AuthContext'
import Login from './Login'
import Logout from './Logout'

const Frame = () => {
  const { state: authState } = useContext(AuthContext)
  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: 'rgb(30 30 30)' }}>
      <Layout.Content style={{ margin: '16px' }}>
        <Row gutter={[8, 8]}>
          <Col flex="0">
            <Link to={'/'}>
              <div
                style={{
                  width: 46,
                  height: 46,
                  backgroundColor: '#0059aa',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <BsFillHouseFill
                  size={32}
                  style={{
                    color: '#fbd912',
                  }}
                />
              </div>
            </Link>
          </Col>
          <Col flex="auto">
            <Typography.Title>
              <Link to={'/'} style={{ color: '#ffffffd9' }}>
                Dirigera web
              </Link>
            </Typography.Title>
          </Col>
          <Col flex="0">
            <Logout />
          </Col>
        </Row>
        {authState.token ? <Outlet /> : <Login />}
      </Layout.Content>
    </Layout>
  )
}

export default Frame
