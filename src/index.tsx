import ReactDOM from 'react-dom';
import GitExpertApp from './GifExpertApp';
import { NextUIProvider } from '@nextui-org/react';
import './index.css';

ReactDOM.render(
	<NextUIProvider>
		<GitExpertApp />
	</NextUIProvider>,
	document.getElementById('root')
);
