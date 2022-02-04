import { useState } from 'react';
import { FormElement, Input } from '@nextui-org/react';
import { styles } from './AddCategory.style';

export const AddCategory = ({ setCategories }: AddCategoryProps) => {
	const [inputValue, setInputValue] = useState('');

	const handleOnChange = (e: React.ChangeEvent<FormElement>) => {
		const { value } = e.target;

		setInputValue(value);
	};

	const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (inputValue.trim().length > 2) {
			setCategories((cats) => [inputValue, ...cats]);
			setInputValue('');
		}
	};

	return (
		<form onSubmit={(e) => handleOnSubmit(e)}>
			<Input
				className='input'
				labelPlaceholder='Gif'
				clearable
				type='text'
				value={inputValue}
				onChange={handleOnChange}
				css={styles.input}
			/>
		</form>
	);
};

interface AddCategoryProps {
	setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}
