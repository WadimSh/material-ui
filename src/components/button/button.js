import "./button.css";

const Button = ({ htmiType, onClick, icon, children, ...rest }) => {
  const startIcon = icon && (
    <>
      {icon}
    </>
  )

  return (
    <button type={htmiType} onClick={onClick} className="button" {...rest}>
      {startIcon}
      {children || 'label'}
    </button>
  )
};

export default Button;