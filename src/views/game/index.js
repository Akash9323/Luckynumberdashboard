/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'

import { CAlert, CCol, CRow, CToast, CToastBody } from '@coreui/react'

import PropTypes from 'prop-types'
import { gameData } from './game.service'
import ViewGame from './viewGame'
import GameForm from './gameForm'
import GameScreen from './gameScreen'
// import ItemsScreen from './itemsScreen'
// import { itemsData } from './item.service'
// import ItemsForm from './itemsForm'
// import ViewItems from './viewItems'

const Game = () => {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [gameName, setGameName] = useState('')
  const [Date, setDate] = useState('')
  const [Time, setTime] = useState('')
  const [Details, setDetails] = useState('');
  


  const [editGame, setEditGame] = useState({
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
    
    setEditGame({ isEditing: false, editItem: null })
    onDiscard()
    setCurrentScreen(1);
    console.log('edit items from onclicknew',editGame)
  }
  const onClickBack = () => {
    onDiscard();
    setCurrentScreen(0);
  }
  const onChangeGameName = (e) => {
    setGameName(e.target.value)
  }
  const onChangeDate= (e) => {
    setDate(e.target.value)
  }
  const onChangeTime = (e) => {
    setTime(e.target.value)
  }
  const onChangeDetails = (e) => {
    setDetails(e.target.value)
  }
  
  // const onChangePassword = (e) => {
  //   setPassword(e.target.value)
  // }
  // const onChangeRole = (e) => {
  //   console.log('role', e.target.value)
  //   setRole(e.target.value)
  // }
  const onClickViewBtn = (editGameData) => {
    //console.log('data coming for editing', editUserData)
    setEditGame({ isEditing: false, editItem: editGameData })
    setCurrentScreen(2);
  }
  const onClickEditBtn = (editGameData) => {
    //console.log('data coming for editing', editUserData)
    setEditGame({ isEditing: true, editItem: editGameData })
    setCurrentScreen(1)
  }
  const onClickDeleteBtn = (id) => {
    //console.log('data coming for editing', editUserData)
    gameData.splice(id, 1);
    setToast({
      visible: true,
      color: 'success',
      message: 'game deleted successfully',
    })
  }

  const onOpenEditItems = () => {
    setGameName(editGame.editItem.game_name)
    setDate(editGame.editItem.game_date)
    setTime(editGame.editItem.game_time)
    //setPassword(editUser.editItem.password)
    setDetails(editGame.editItem.game_details)
  }
  const onDiscard = () => {
    setGameName('')
    setDate('')
    setTime('')
    // setPassword('')
    setDetails('')
  }
  const onValidate = () => {
   // const emailRegex = /\S+@\S+\.\S+/
    if (gameName === '') {
      setToast({
        visible: true,
        color: 'error',
        message: 'Game name can not be empty',
      })
    } else if (Date === '') {
      setToast({
        visible: true,
        color: 'danger',
        message: 'Date  can not be empty',
      })
    // } else if (emailRegex.test(email) === false) {
    //   setToast({
    //     visible: true,
    //     color: 'danger',
    //     message: 'Invalid Email',
    //   })
    } else if (Time === '') {
      setToast({
        visible: true,
        color: 'danger',
        message: 'Time can not be empty',
      })
    }
    else if (Details === '') {
      setToast({
        visible: true,
        color: 'danger',
        message: 'details can not be empty',
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
        game_name: gameName,
        game_date:Date,
        game_time: Time,
        game_details: Details,

       // password: password,
        //role_name: role,
      }
      console.log('add game data', data)
      gameData.push(data)
    }
  }
  const onUpdate = async (id) => {
    if (onValidate()) {
      const data = {
        game_id: id,
        game_name: gameName,
        game_date: Date,
        game_time:Time,
        game_details: Details,
        // password: password,
        //role_name: role,
      } //this data will required for api-call

      for (const obj of gameData) {
        if (obj.id === id) {
          obj.game_id = id
          obj.game_name = gameName
          obj.game_date = Date
          obj.game_time = Time
          obj.game_details = Details
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
            <GameScreen
              onClickAddGameBtn={onClickAddNew}
              editGame={editGame}
              setEditGame={setEditGame}
              setCurrentScreen={setCurrentScreen}
              onClickViewBtn ={onClickViewBtn }
              onClickEditBtn ={onClickEditBtn}
              onClickDeleteBtn={onClickDeleteBtn}
           />
          )} 
          {currentScreen === 1 && (
            <GameForm
              onClickBack={onClickBack}
              onSubmit={onSubmit}
              onUpdate={onUpdate}
              onDiscard={onDiscard}
              onChangeGameName={onChangeGameName}
              onChangeDate={onChangeDate}
              onChangeTime={onChangeTime}
              onChangeDetails={onChangeDetails}
              //onOpenEditGame={onOpenEditGame}
              gameName={gameName}
              date={Date}
              Time={Time}
              editGame={editGame}
            />
          )}
          {currentScreen === 2 && <ViewGame onClickBack={onClickBack} editItems={editGame} />}

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

export default Game

Game.propTypes = {
  editGame:PropTypes.object,
  onOpenEditGame:PropTypes.object,
}
