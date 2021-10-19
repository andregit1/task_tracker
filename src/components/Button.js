import PropTypes from 'prop-types'

const Button = ({ color, text, onClickParam }) => {
  return (
    <button onClick={onClickParam} style={{backgroundColor: color}} className='btn'>{text}</button>
  );
}

Button.defaultProps = {
  color: 'green',
  text: 'Add'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button;
