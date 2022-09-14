import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CToast,
  CToastBody,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [toast, setToast] = useState({
    visible: false,
    color: 'success',
    message: '',
  })
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const onValidate = () => {
    const emailRegex = /\S+@\S+\.\S+/
    if (email === '') {
      setToast({
        visible: true,
        color: 'danger',
        message: 'Email name can not be empty',
      })
    } else if (emailRegex.test(email) === false) {
      setToast({
        visible: true,
        color: 'danger',
        message: 'Invalid Email',
      })
    } else if (password === '') {
      setToast({
        visible: true,
        color: 'danger',
        message: 'Password can not be empty',
      })
    } else {
      return true
    }
  }
  const onSubmit = () => {
    const data = {
      user_email: email,
      password: password,
    }
    if (onValidate) {
      localStorage.setItem('luckyNumber_User', JSON.stringify(data))
      navigate('/dashboard')
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="User Email"
                        autoComplete="useremail"
                        value={email}
                        onChange={onChangeEmail}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={onChangePassword}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={onSubmit}>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Sign Up To Handle This Panel</p>
                    <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                        //onClick={onSubmit}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
        <CToast
          autohide={false}
          visible={toast.visible}
          onClose={() => {
            setToast({ ...toast, visible: false })
          }}
        >
          <CToastBody>
            <CAlert color={toast.color}>{toast.message}</CAlert>
          </CToastBody>
        </CToast>
      </CContainer>
    </div>
  )
}

export default Login
