import React, { useState } from 'react';
import axios from 'axios';

function OtpVerify(props) {
	axios.defaults.withCredentials = true;

	const [ error, setError ] = useState({
		error: '',
		success: ''
	});
	const { value, handleChange } = props;
	const back = (e) => {
		e.preventDefault();
		props.prevStep();
	};

	const confirmOtp = () => {
		axios
			.post('http://localhost:8855/verifyOTP', {
				phone: `${value.phone}`,
				hash: `${value.hash}`,
				otp: `${value.otp}`,
				withCredentials: true
			})
			.then(function(res) {
				console.log(res.data);
				window.location.reload();
			})
			.catch(function(error) {
				console.log(error.response.data);
				setError({ ...error, error: error.response.data.msg });
			});
	};
	return (
		<div className='container' >
			<div >
				<div >
					<div >Authentication App</div>
					<div >{error.error}</div>
					<div >{error.success}</div>
					<div >Enter One Time Password:</div>
					<div>
						<input
							type="tel"
							value={value.otp}
							onChange={handleChange('otp')}
							placeholder="Enter the 6 digits OTP"
							
						/>
					</div>
					<button onClick={back}>
						Back
					</button>
					<button onClick={confirmOtp} >
						Confirm OTP
					</button>
				</div>
			</div>
		</div>
	);
}

export default OtpVerify;
