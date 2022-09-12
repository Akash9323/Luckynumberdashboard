/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'

import { CAlert, CCol, CRow, CToast, CToastBody } from '@coreui/react'
import PlayerForm from './playerForm'
import ViewPlayer from './viewPlayer'
import { playerData } from './player.service'
import PlayersScreen from './playersScreen'
import PropTypes from 'prop-types'

const Players = () => {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [playerName, setPlayerName] = useState('')
  const [address, setPlayerAddress] = useState('')
  const [refferedby, setPlayerRefferedby] = useState('')
//   const [email, setEmail] = useState('')
//   const [mobileNo, setMobileNo] = useState('')
  // const [password, setPassword] = useState('')
  //const [role, setRole] = useState('');

  const [editPlayer, setEditPlayer] = useState({
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
    
    setEditPlayer({ isEditing: false, editItem: null })
    onDiscard()
    setCurrentScreen(1);
    console.log('edit player from onclicknew',editPlayer)
  }
  const onClickBack = () => {
    onDiscard();
    setCurrentScreen(0);
  }
  const onChangePlayerName = (e) => {
    setPlayerName(e.target.value)
  }
  const onChangeAddress = (e) => {
    setPlayerAddress(e.target.value)
  }
  const onChangeRefferedby = (e) => {
    setPlayerRefferedby(e.target.value)
  }
  // const onChangePassword = (e) => {
  //   setPassword(e.target.value)
  // }
//   const onChangeRole = (e) => {
//     console.log('role', e.target.value)
//     setRole(e.target.value)
//   }
  const onClickViewBtn = (editPlayerData) => {
    //console.log('data coming for editing', editUserData)
    setEditPlayer({ isEditing: false, editItem: editPlayerData })
    setCurrentScreen(2);
  }
  const onClickEditBtn = (editPlayerData) => {
    //console.log('data coming for editing', editUserData)
    setEditPlayer({ isEditing: true, editItem: editPlayerData })
    setCurrentScreen(1)
  }
  const onClickDeleteBtn = (id) => {
    //console.log('data coming for editing', editPlayerData)
    playerData.splice(id, 1);
    setToast({
      visible: true,
      color: 'success',
      message: 'player deleted successfully',
    })
  }
 
  const onOpenEditPlayer = () => {
    setPlayerName(editPlayer.editItem.player_name)
    setPlayerAddress(editPlayer.editItem.player_address)
    setPlayerRefferedby(editPlayer.editItem.player_refferedby)
    //setPassword(editUser.editItem.password)
    //setRole(editPlayer.editItem.role_name)
  }
  const onDiscard = () => {
    setPlayerName('')
    setPlayerAddress('')
    setPlayerRefferedby('')
    // setPassword('')
    //setRole('')
  }
  const onValidate = () => {
    const emailRegex = /\S+@\S+\.\S+/
    if (playerName === '') {
      setToast({
        visible: true,
        color: 'error',
        message: 'User name can not be empty',
      })
    } else if (playerAddress === '') {
      setToast({
        visible: true,
        color: 'danger',
        message: 'Address name can not be empty',
      })
    } else if (emailRegex.test(address) === false) {
      setToast({
        visible: true,
        color: 'danger',
        message: 'Invalid Email',
      })
    } else if (refferedby === '') {
      setToast({
        visible: true,
        color: 'danger',
        message: 'refferedby can not be empty',
      })
    }
    //  else if (password === '') {
    //   setToast({
    //     visible: true,
    //     color: 'danger',
    //     message: 'Password can not be empty',
    //   })
    // } 
    // else if (role.length === 0) {
    //   setToast({
    //     visible: true,
    //     color: 'danger',
    //     message: 'Roles can not be empty',
    //   })
    // } else {
      return true
    }
  }
  const onSubmit = async () => {
    console.log('onSubmit called', onValidate())
    if (onValidate()) {
      const data = {
        //user_id: userData[userData.length - 1].user_id + 1, //for api call user_id is not required
        player_name:playerName,
        player_address: playeraddress,
        player_refferedby: playerrefferedby,
       // password: password,
        //role_name: role,
      }
      console.log('add player data', data)
      playerData.push(data)
    }
  }
  const onUpdate = async (id) => {
    if (onValidate()) {
      const data = {
        player_id: id,
        player_name: playerName,
        player_address: playeraddress,
        player_refferedby:playerrefferedby
        //player_email: email,
        // password: password,
        //role_name: role,
      } //this data will required for api-call

      for (const obj of playerData) {
        if (obj.id === id) {
          obj.player_id = id
          obj.player_name = playerName
          obj.player_address = address
        //   obj.user_email = email
        //   obj.role_name = role

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
            <PlayerScreen
              onClickAddUserBtn={onClickAddNew}
              editPlayer={editPlayer}
              setEditPlayer={setEditPlayer}
              setCurrentScreen={setCurrentScreen}
              onClickViewBtn ={onClickViewBtn }
              onClickEditBtn ={onClickEditBtn}
              onClickDeleteBtn={onClickDeleteBtn}
           />
          )} 
          {currentScreen === 1 && (
            <PlayerForm
              onClickBack={onClickBack}
              onSubmit={onSubmit}
              onUpdate={onUpdate}
              onDiscard={onDiscard}
              onChangePlayerName={onChangePlayerName}
              //onChangeEmail={onChangeEmail}
              //onChangeMobileNo={onChangeMobileNo}
              //onChangePassword={onChangePassword}
              //onChangeRole={onChangeRole}
              onOpenEditPlayer={onOpenEditPlayer}
              playerName={playerName}
              playerAddress={playerAddress}
              //email={email}
              //mobileNo={mobileNo}
              //password={password}
             // role={role}
              editUser={editPlayer}
            />
          )}
          {currentScreen === 2 && <ViewPlayer onClickBack={onClickBack} editPlayer={editPlayer} />}

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

export default  Players

Players.propTypes = {
  editUser:PropTypes.object,
}