import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import NotFound from '@/pages/not-found';

const App = lazy(() => import('@/app'));

export const PATHS = {
    INDEX: '/',
    TIMEACTIVE: '/live'
};

const router = createBrowserRouter([
    {
        path: PATHS.INDEX,
        element: <NotFound />
    },
    {
        path: `${PATHS.TIMEACTIVE}/*`,
        element: (
            <Suspense fallback={null}>
                <App />
            </Suspense>
        ),
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;
