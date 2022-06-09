import '../../styling/errorMessage.scss';

const ErrorMessage = ({ children }) => {
	return <div className='e-message'>{children}</div>;
};

export default ErrorMessage;
