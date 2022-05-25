import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<App state={state} funcs={functions} statics={statics} />
	</React.StrictMode>
);

reportWebVitals();
