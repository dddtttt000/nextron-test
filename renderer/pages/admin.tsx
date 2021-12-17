import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '../components/Link'

function admin() {
  return (
    <div>
      어드민 페이지 입니다.
      <Typography gutterBottom>
        <Link href="/home">홈으로 </Link>
      </Typography>
    </div>
  )
}

export default admin
