import Router, { withRouter } from 'next/router'

const Test = ({ router }) => {
  return (
    <>
      <h2>test:{ router.query.id }</h2>
    </>
  )
}

export default withRouter(Test) // HOC