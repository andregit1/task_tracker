import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ title, toggleActionAdd, showAddTaskProp }) => {

  // const onClickFuncMethod = () => {
  //   console.log('click')
  // }

  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {/* <Button onClickParam={onClickFuncMethod} /> */}
      
      {location.pathname === '/task_tracker' && <Button 
        onClickParam={toggleActionAdd} 
        text={showAddTaskProp ? 'close' : 'add'}
        color={showAddTaskProp ? 'red' : 'green'}
      />}

    </header>
  );
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;
