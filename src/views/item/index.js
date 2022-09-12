/* eslint-disable prettier/prettier */


/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'

import { CAlert, CCol, CRow, CToast, CToastBody } from '@coreui/react'

import PropTypes from 'prop-types'
import ItemsScreen from './itemsScreen'
import { itemsData } from './item.service'
import ItemsForm from './itemsForm'
import ViewItems from './viewItems'

const Items = () => {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [itemsName, setItemsName] = useState('')
  const [Description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [qty, setQty] = useState('');
  const [category, setCategory] = useState('');
  const [purchasetype, setPurchasetype] = useState('');


  const [editItems, setEditItems] = useState({
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
    
    setEditItems({ isEditing: false, editItem: null })
    onDiscard()
    setCurrentScreen(1);
    console.log('edit items from onclicknew',editItems)
  }
  const onClickBack = () => {
    onDiscard();
    setCurrentScreen(0);
  }
  const onChangeItemsName = (e) => {
    setItemsName(e.target.value)
  }
  const onChangeDescription = (e) => {
    setDescription(e.target.value)
  }
  const onChangePrice = (e) => {
    setPrice(e.target.value)
  }
  const onChangeQty = (e) => {
    setQty(e.target.value)
  }
  const onChangeCategory = (e) => {
    setCategory(e.target.value)
  }
  const onChangePurchasetype = (e) => {
    setPurchasetype(e.target.value)
  }
  // const onChangePassword = (e) => {
  //   setPassword(e.target.value)
  // }
  // const onChangeRole = (e) => {
  //   console.log('role', e.target.value)
  //   setRole(e.target.value)
  // }
  const onClickViewBtn = (editItemsData) => {
    //console.log('data coming for editing', editUserData)
    setEditItems({ isEditing: false, editItem: editItemsData })
    setCurrentScreen(2);
  }
  const onClickEditBtn = (editItemsData) => {
    //console.log('data coming for editing', editUserData)
    setEditItems({ isEditing: true, editItem: editItemsData })
    setCurrentScreen(1)
  }
  const onClickDeleteBtn = (id) => {
    //console.log('data coming for editing', editUserData)
    itemsData.splice(id, 1);
    setToast({
      visible: true,
      color: 'success',
      message: 'items deleted successfully',
    })
  }

  const onOpenEditItems = () => {
    setItemsName(editItems.editItem.items_name)
    setDescription(editItems.editItem.items_description)
    setPrice(editItems.editItem.items_price)
    //setPassword(editUser.editItem.password)
    setQty(editItems.editItem.items_qty)
    setCategory(editItems.editItem.items_category)
  }
  const onDiscard = () => {
    setItemsName('')
    setDescription('')
    setPrice('')
    // setPassword('')
    setQty('')
    setCategory('')
    setPurchasetype('')
  }
  const onValidate = () => {
   // const emailRegex = /\S+@\S+\.\S+/
    if (itemsName === '') {
      setToast({
        visible: true,
        color: 'error',
        message: 'Items name can not be empty',
      })
    } else if (Description === '') {
      setToast({
        visible: true,
        color: 'danger',
        message: 'description name can not be empty',
      })
    // } else if (emailRegex.test(email) === false) {
    //   setToast({
    //     visible: true,
    //     color: 'danger',
    //     message: 'Invalid Email',
    //   })
    } else if (price === '') {
      setToast({
        visible: true,
        color: 'danger',
        message: 'price can not be empty',
      })
    }
    else if (qty === '') {
      setToast({
        visible: true,
        color: 'danger',
        message: 'qty can not be empty',
      })
    }
    else if (category === '') {
      setToast({
        visible: true,
        color: 'danger',
        message: 'category can not be empty',
      })
    }
    else if (purchasetype === '') {
      setToast({
        visible: true,
        color: 'danger',
        message: 'purchasetype can not be empty',
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
        items_name: itemsName,
        items_description:Description,
        items_price: price,
       // password: password,
        //role_name: role,
      }
      console.log('add items data', data)
      itemsData.push(data)
    }
  }
  const onUpdate = async (id) => {
    if (onValidate()) {
      const data = {
        items_id: id,
        items_name: itemsName,
        items_description: Description,
        items_price: price,
        // password: password,
        //role_name: role,
      } //this data will required for api-call

      for (const obj of itemsData) {
        if (obj.id === id) {
          obj.items_id = id
          obj.items_name = itemsName
          obj.items_description = Description
          obj.items_price = price
          obj.qty = qty

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
            <ItemsScreen
              onClickAddUserBtn={onClickAddNew}
              editUser={editItems}
              setEditUser={setEditItems}
              setCurrentScreen={setCurrentScreen}
              onClickViewBtn ={onClickViewBtn }
              onClickEditBtn ={onClickEditBtn}
              onClickDeleteBtn={onClickDeleteBtn}
           />
          )} 
          {currentScreen === 1 && (
            <ItemsForm
              onClickBack={onClickBack}
              onSubmit={onSubmit}
              onUpdate={onUpdate}
              onDiscard={onDiscard}
              onChangeItemsName={onChangeItemsName}
              onChangeDescription={onChangeDescription}
              onChangePrice={onChangePrice}
              //onChangePassword={onChangePassword}
             // onChangeRole={onChangeRole}
              onOpenEditItems={onOpenEditItems}
              itemsName={itemsName}
              description={Description}
              price={price}
              //password={password}
              //role={role}
              editItems={editItems}
            />
          )}
          {currentScreen === 2 && <ViewItems onClickBack={onClickBack} editItems={editItems} />}

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

export default Items

Items.propTypes = {
  editItems:PropTypes.object,
}
// import React from 'react'

// const Items = () => {
//   return (
//     <div>
//     <h1>Items</h1>
//     </div>
//   )
// }

// export default Items