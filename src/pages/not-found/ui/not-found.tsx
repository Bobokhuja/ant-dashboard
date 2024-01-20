import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className="flex items-center flex-col justify-center h-screen">
      404 Not found
      <Link to="/">To Home</Link>
    </div>
  )
}
