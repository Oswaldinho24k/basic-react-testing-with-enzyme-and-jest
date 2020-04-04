import PropTypes from 'prop-types';

/**
 * Component for showing details of the user.
 * 
 * @component
 * @example
 * 
 * const handleClick = () => console.log('clicked')
 * return (
 *   <Button disabled={false} onClick={handleClick}> The Button </Button>
 * )
 */

const Button = ({children, disabled, onClick}) => {
  return(
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false
}

Button.propTypes = {
  /**
   * Buttons's disabled status
   */
  disabled: PropTypes.bool,
  /**
   * Buttons's onClick function
   */
  onClick: PropTypes.func,
  /**
   * Buttons's children text
   */
  children: PropTypes.any.isRequired
}

export default Button
