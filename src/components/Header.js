import PropTypes from 'prop-types'
import Button from './Button';

const Header = ({ title, toggleActionAdd, showAddTaskProp }) => {

  // const onClickFuncMethod = () => {
  //   console.log('click')
  // }

  return (
    <header className='header'>
      <h1>{title}</h1>
      {/* <Button onClickParam={onClickFuncMethod} /> */}
      <Button 
        onClickParam={toggleActionAdd} 
        text={showAddTaskProp ? 'close' : 'add'}
        color={showAddTaskProp ? 'red' : 'green'}
      />
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
