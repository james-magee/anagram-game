import './CustomButton.css';

const CustomButton = ({label, clickHandler, customClasses}) => {

  const getClassNames = () => {
    if (customClasses !== undefined) {
      return 'custom-button ' + customClasses;
    } else {
      return 'custom-button ';
    }
  };  

  return (
    <div
      className={getClassNames()}
      onClick={clickHandler}
    >
      {label}
    </div>
  );
};

export default CustomButton;