import React from 'react';
import styled from 'styled-components';

interface InputProps {
	value: string,
	type: string,
	placeholder: string,
	name: string,
	onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined,
}

const Input = ({
	value = '',
	type = 'text',
	placeholder = '',
	name = 'input',
	onChange = () => {
	},
}: InputProps) => {
	return <InputElement value={value} type={type} placeholder={placeholder} name={name} onChange={onChange}/>
}

const InputElement = styled.input<InputProps>`
  display: block;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
  color: #000;
  width: 100%;
  padding: 8px 10px;
`;

export default Input;