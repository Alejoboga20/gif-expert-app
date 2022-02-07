import { useState } from 'react';
import { FormElement } from '@nextui-org/react';

export const useAddCategory = ({ setCategories }: UseAddCategoryArgs) => {
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

	return {
		handleOnChange,
		inputValue,
		handleOnSubmit,
	};
};

interface UseAddCategoryArgs {
	setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}
