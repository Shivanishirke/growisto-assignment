const Input = ({ label, placeholder }) => {
  return (
    <div className="input-container">
      <div>{label}</div>
      <input placeholder={placeholder} />
    </div>
  );
};

export default Input;
