/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'

import { CAlert, CCol, CRow, CToast, CToastBody } from '@coreui/react'

import PropTypes from 'prop-types'
import ViewNumber from './viewForm'
import NumberForm from './numberForm'
import { numberData } from './number.service'
import NumberScreen from './numberScreen'
// import ItemsScreen from './itemsScreen'


const Randomnumber = () => {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [numberName, setNumberName] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
 


  const [editNumber, setEditNumber] = useState({
    isEditing: false,
    editNumber: null,
  })
  const [toast, setToast] = useState({
    visible: false,
    color: 'success',
    message: '',
  })
  const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(5);
  const onClickAddNew = () => {
    
    setEditNumber({ isEditing: false, editItem: null })
    onDiscard()
    setCurrentScreen(1);
    console.log('edit items from onclicknew',editNumber)
  }
  const onClickBack = () => {
    onDiscard();
    setCurrentScreen(0);
  }
  const onChangeNumberName = (e) => {
    setNumberName(e.target.value)
  }
  const onChangeStart = (e) => {
    setStart(e.target.value)
  }
  const onChangeEnd = (e) => {
    setEnd(e.target.value)
  }

  // const onChangePassword = (e) => {
  //   setPassword(e.target.value)
  // }
  // const onChangeRole = (e) => {
  //   console.log('role', e.target.value)
  //   setRole(e.target.value)
  // }
  const onClickViewBtn = (editNumberData) => {
    //console.log('data coming for editing', editUserData)
    setEditNumber({ isEditing: false, editItem: editNumberData })
    setCurrentScreen(2);
  }
  const onClickEditBtn = (editNumberData) => {
    //console.log('data coming for editing', editUserData)
    setEditNumber({ isEditing: true, editItem: editNumberData })
    setCurrentScreen(1)
  }
  const onClickDeleteBtn = (id) => {
    //console.log('data coming for editing', editUserData)
    numberData.splice(id, 1);
    setToast({
      visible: true,
      color: 'success',
      message: 'number deleted successfully',
    })
  }

  const onOpenEditNumber = () => {
    setNumberName(editNumber.editItem.number_name)
    setStart(editNumber.editItem.number_start)
    setEnd(editNumber.editItem.number_end)
    //setPassword(editUser.editItem.password)
  }
  const onDiscard = () => {
    setNumberName('')
    setStart('')
    setEnd('')
    // setPassword('')
   
  }
  const onValidate = () => {
   // const emailRegex = /\S+@\S+\.\S+/
    if (numberName === '') {
      setToast({
        visible: true,
        color: 'error',
        message: 'Number name can not be empty',
      })
    } else if (start === '') {
      setToast({
        visible: true,
        color: 'danger',
        message: 'start name can not be empty',
      })
    // } else if (emailRegex.test(email) === false) {
    //   setToast({
    //     visible: true,
    //     color: 'danger',
    //     message: 'Invalid Email',
    //   })
    } else if (end === '') {
      setToast({
        visible: true,
        color: 'danger',
        message: 'price can not be empty',
      })
    }
   
    //  else if (password === '') {
    //   setToast({
    //     visible: true,
    //     color: 'danger',
    //     message: 'Password can not be empty',
    //   })
    // } 
    // else if (qty.length === 0) {
    //   setToast({
    //     visible: true,
    //     color: 'danger',
    //     message: 'quantity can not be empty',
    //   })
    //} 
    else {
      return true
    }
  }
  const onSubmit = async () => {
    console.log('onSubmit called', onValidate())
    if (onValidate()) {
      const data = {
        //user_id: userData[userData.length - 1].user_id + 1, //for api call user_id is not required
        number_name: numberName,
        number_start:start,
        number_end: end,
       // password: password,
        //role_name: role,
      }
      console.log('add number data', data)
      numberData.push(data)
    }
  }
  const onUpdate = async (id) => {
    if (onValidate()) {
      const data = {
        number_id: id,
        number_name: numberName,
        number_start: start,
        number_end: end,
        // password: password,
        //role_name: role,
      } //this data will required for api-call

      for (const obj of numberData) {
        if (obj.id === id) {
          obj.number_id = id
          obj.number_name = numberName
          obj.number_start = start
          obj.number_end= end
        
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
            <NumberScreen
              onClickAddNumberBtn={onClickAddNew}
              editNumber={editNumber}
              setEditNumber={setEditNumber}
              setCurrentScreen={setCurrentScreen}
              onClickViewBtn ={onClickViewBtn }
              onClickEditBtn ={onClickEditBtn}
              onClickDeleteBtn={onClickDeleteBtn}
           />
          )} 
          {currentScreen === 1 && (
            <NumberForm
              onClickBack={onClickBack}
              onSubmit={onSubmit}
              onUpdate={onUpdate}
              onDiscard={onDiscard}
              onChangeNumberName={onChangeNumberName}
              onChangeStart={onChangeStart}
              onChangeEnd={onChangeEnd}
              //onChangePassword={onChangePassword}
             // onChangeRole={onChangeRole}
              onOpenEditItems={onOpenEditNumber}
              numberName={numberName}
              start={start}
              end={end}
              //password={password}
              //role={role}
              editNumber={editNumber}
            />
          )}
          {currentScreen === 2 && <ViewNumber onClickBack={onClickBack} editItems={editNumber} />}

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

export default Randomnumber

Randomnumber.propTypes = {
  editNumber:PropTypes.object,
  onClickAddNumberBtn:PropTypes.any,
  onClickViewBtn:PropTypes.object,
}
