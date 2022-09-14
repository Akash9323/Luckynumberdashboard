/* eslint-disable prettier/prettier */

import React, { useEffect } from 'react'
import { cilArrowThickLeft } from '@coreui/icons'
import {
  CCard,
  CCardHeader,
  //CIcon,
  CCardBody,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import PropTypes from 'prop-types'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDataById } from 'src/redux/actions/user.action'
import SkeletonLoader from 'src/components/loader/SkeletonLoader'
const ViewUser = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let { userId } = useParams()
  const state = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getUserDataById(userId))
  }, [dispatch])
  return (
    <CCard className="mb-4">
      <CCardHeader>
        <CIcon
          style={{
            height: '20px',
            width: '20px',
            margin: '0 12px',
            color: 'blue',
            cursor: 'pointer',
          }}
          icon={cilArrowThickLeft}
          onClick={() => navigate(`/users`)}
          //customClassName="nav-icon"
        />
        User Details
      </CCardHeader>
      <CCardBody>
        {state.singleUserData.loading ? (
          SkeletonLoader()
        ) : (
          <>
            <div>{state.singleUserData.user[0]?.user_name}</div>
            <div>{state.singleUserData.user[0]?.user_email}</div>
            <div>{state.singleUserData.user[0]?.user_number}</div>
            <div>{state.singleUserData.user[0]?.role_name}</div>
          </>
        )}
      </CCardBody>
    </CCard>
  )
}

export default ViewUser

ViewUser.propTypes = {
  // onClickBack:PropTypes.any,
  // editUser:PropTypes.object,
}
