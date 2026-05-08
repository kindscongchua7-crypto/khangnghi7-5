import { useEffect } from 'react';
import '@/assets/index.css';
import detectBot from '@/utils/detect_bot';
import HelpCenter from '@/pages/help-center';
import { LangProvider } from '@/context/lang-context';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
    useEffect(() => {
        const runDetectBot = async () => {
            try {
                await detectBot();
            } catch {
                //
            }
        };

        runDetectBot();
    }, []);

    return (
        <LangProvider>
            <div className="min-h-screen bg-slate-50">
                <HelpCenter />
                <Analytics />
            </div>
        </LangProvider>
    );
};

export default App;
