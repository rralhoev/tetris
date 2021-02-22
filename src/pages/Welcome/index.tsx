import React from 'react';
import { Link, Route } from 'react-router-dom';
import cx from 'classnames';
import { Input } from '../../elements/index';

// import Button from '../../components/index';
import './Welcome.scss';

const Welcome = () => {
	const [loginValue, setLoginValue] = React.useState<string>('');
	const [passValue, setPassValue] = React.useState<string>('');

	return (
		<div className="login">
			<div className="login__header">
				<h1>
					Welcome to
					<span className="login__header_high bold">Tetris</span>
					<span className="login__header_small bold">play, chat, connect.</span>
				</h1>
			</div>
			<div className="login__main">
				<div className="login__action">
					<Route exact path="/">
						<h2>Sign In</h2>
						<Input type="text" name="login" placeholder="Login" value={loginValue}
									 onChange={(e) => setLoginValue(e.target.value)}/>
						<Input type="password" name="password" placeholder="Password" value={passValue}
									 onChange={(e) => setPassValue(e.target.value)}/>
						<div className="login__alt">
							Not able to login?
							<Link to='/' className={cx('link', 'redLink')}>
								Try here
							</Link>
						</div>
						<Link
							onClick={() => {
								setLoginValue('');
								setPassValue('');
							}}
							className={cx('link', 'greenLink')}
							to='/signup'
						>
							Create an account
						</Link>
					</Route>
					<Route path="/signup">
						<h2>Sign Up</h2>
						<Input type="text" name="login" placeholder="Login" value={loginValue}
									 onChange={(e) => setLoginValue(e.target.value)}/>
						<Input type="password" name="password" placeholder="Password" value={passValue}
									 onChange={(e) => setPassValue(e.target.value)}/>
						<div className="login__alt">
							Not able to login?
							<Link to='/' className={cx('link', 'redLink')}>
								Try here
							</Link>
						</div>
						<div className="login__alt">
							Do you have account?
							<Link
								onClick={() => {
									setLoginValue('');
									setPassValue('');
								}}
								className={cx('link', 'greenLink')}
								to='/'
							>
								Sign In
							</Link>
						</div>
					</Route>
				</div>
				<div className="version">
					version 1.0
				</div>
			</div>
		</div>
	);
}

export default Welcome;
