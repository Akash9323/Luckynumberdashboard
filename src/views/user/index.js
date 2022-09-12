/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'

import { CAlert, CCol, CRow, CToast, CToastBody } from '@coreui/react'
import UserForm from './userForm'
import ViewUser from './viewUser'
import { userData } from './user.service'
import UsersScreen from './usersScreen'
import PropTypes from 'prop-types'

const Users = () => {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  // const [password, setPassword] = useState('')
  const [role, setRole] = useState('');

  const [editUser, setEditUser] = useState({
    isEditing: false,
    editItem: null,
  })
  const [toast, setToast] = useState({
    visible: false,
    color: 'success',
    message: '',
  })
  const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(5);
  const onClickAddNew = () => {
    
    setEditUser({ isEditing: false, editItem: null })
    onDiscard()
    setCurrentScreen(1);
    console.log('edit user from onclicknew',editUser)
  }
  const onClickBack = () => {
    onDiscard();
    setCurrentScreen(0);
  }
  const onChangeUserName = (e) => {
    setUserName(e.target.value)
  }
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onChangeMobileNo = (e) => {
    setMobileNo(e.target.value)
  }
  // const onChangePassword = (e) => {
  //   setPassword(e.target.value)
  // }
  const onChangeRole = (e) => {
    console.log('role', e.target.value)
    setRole(e.target.value)
  }
  const onClickViewBtn = (editUserData) => {
    //console.log('data coming for editing', editUserData)
    setEditUser({ isEditing: false, editItem: editUserData })
    setCurrentScreen(2);
  }
  const onClickEditBtn = (editUserData) => {
    //console.log('data coming for editing', editUserData)
    setEditUser({ isEditing: true, editItem: editUserData })
    setCurrentScreen(1)
  }
  const onClickDeleteBtn = (id) => {
    //console.log('data coming for editing', editUserData)
    userData.splice(id, 1);
    setToast({
      visible: true,
      color: 'success',
      message: 'user deleted successfully',
    })
  }

  

  const onOpenEditUser = () => {
    setUserName(editUser.editItem.user_name)
    setEmail(editUser.editItem.user_email)
    setMobileNo(editUser.editItem.user_number)
    //setPassword(editUser.editItem.password)
    setRole(editUser.editItem.role_name)
  }
  const onDiscard = () => {
    setUserName('')
    setEmail('')
    setMobileNo('')
    // setPassword('')
    setRole('')
  }
  const onValidate = () => {
    const emailRegex = /\S+@\S+\.\S+/
    if (userName === '') {
      setToast({
        visible: true,
        color: 'error',
        message: 'User name can not be empty',
      })
    } else if (email === '') {
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
    } else if (mobileNo === '') {
      setToast({
        visible: true,
        color: 'danger',
        message: 'mobile number can not be empty',
      })
    }
    //  else if (password === '') {
    //   setToast({
    //     visible: true,
    //     color: 'danger',
    //     message: 'Password can not be empty',
    //   })
    // } 
    else if (role.length === 0) {
      setToast({
        visible: true,
        color: 'danger',
        message: 'Roles can not be empty',
      })
    } else {
      return true
    }
  }
  const onSubmit = async () => {
    console.log('onSubmit called', onValidate())
    if (onValidate()) {
      const data = {
        //user_id: userData[userData.length - 1].user_id + 1, //for api call user_id is not required
        user_name: userName,
        user_number: mobileNo,
        user_email: email,
       // password: password,
        role_name: role,
      }
      console.log('add user data', data)
      userData.push(data)
    }
  }
  const onUpdate = async (id) => {
    if (onValidate()) {
      const data = {
        user_id: id,
        user_name: userName,
        user_number: mobileNo,
        user_email: email,
        // password: password,
        role_name: role,
      } //this data will required for api-call

      for (const obj of userData) {
        if (obj.id === id) {
          obj.user_id = id
          obj.user_name = userName
          obj.user_number = mobileNo
          obj.user_email = email
          obj.role_name = role

          break
        }
      }
      // console.log('update user payload', id, data)
    }
  }

  return (
    <>
      <CRow>
        <CCol xs>
           {currentScreen === 0 && (
            <UsersScreen
              onClickAddUserBtn={onClickAddNew}
              editUser={editUser}
              setEditUser={setEditUser}
              setCurrentScreen={setCurrentScreen}
              onClickViewBtn ={onClickViewBtn }
              onClickEditBtn ={onClickEditBtn}
              onClickDeleteBtn={onClickDeleteBtn}
           />
          )} 
          {currentScreen === 1 && (
            <UserForm
              onClickBack={onClickBack}
              onSubmit={onSubmit}
              onUpdate={onUpdate}
              onDiscard={onDiscard}
              onChangeUserName={onChangeUserName}
              onChangeEmail={onChangeEmail}
              onChangeMobileNo={onChangeMobileNo}
              //onChangePassword={onChangePassword}
              onChangeRole={onChangeRole}
              onOpenEditUser={onOpenEditUser}
              userName={userName}
              email={email}
              mobileNo={mobileNo}
              //password={password}
              role={role}
              editUser={editUser}
            />
          )}
          {currentScreen === 2 && <ViewUser onClickBack={onClickBack} editUser={editUser} />}

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
        </CCol>
      </CRow>
    </>
  )
}

export default Users

Users.propTypes = {
  editUser:PropTypes.object,
}