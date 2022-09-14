import { CProgress, CProgressBar } from '@coreui/react'
import React from 'react'
import './loader.css'

const SkeletonLoader = () => {
  return Array(5)
    .fill(0)
    .map((i, x) => (
      <React.Fragment key={`MedSkele${x}`}>
        <CProgress className="mb-3 skeleton">
          <CProgressBar value={0} />
        </CProgress>
      </React.Fragment>
    ))
}

export default SkeletonLoader
