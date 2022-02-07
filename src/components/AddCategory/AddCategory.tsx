import { Input } from '@nextui-org/react';
import { styles } from './AddCategory.style';
import { useAddCategory } from './useAddCategory';

export const AddCategory = ({ setCategories }: AddCategoryProps) => {
	const { handleOnChange, inputValue, handleOnSubmit } = useAddCategory({ setCategories });

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
