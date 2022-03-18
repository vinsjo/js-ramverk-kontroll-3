import React from 'react';
import { isFn } from 'x-is-type';
import { classNames } from '../utils';
import './Button.css';
const Button = ({
	className,
	children,
	onClick,
	value,
	disabled = false,
	variant = 'default',
	type = 'button',
}) => {
	return (
		<button
			className={classNames('btn', className, variant)}
			type={type}
			value={value || null}
			onClick={e => isFn(onClick) && onClick(e)}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;
