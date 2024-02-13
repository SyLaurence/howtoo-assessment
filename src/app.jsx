import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './utils/router'

ReactDOM.createRoot(document.getElementById('app')).render(
    <RouterProvider router={ router } />
)
