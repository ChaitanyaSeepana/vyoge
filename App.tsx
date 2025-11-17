import React, { useState, useCallback } from 'react';
import { Page } from './types';
import RegistrationPage from './pages/RegistrationPage';
import BlogPage from './pages/BlogPage';
import CalculatorPage from './pages/CalculatorPage';
import ConfirmationPage from './pages/ConfirmationPage';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('registration');

    const handleNavigate = useCallback((page: Page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0); // Scroll to top on page change
    }, []);

    const renderPage = () => {
        switch (currentPage) {
            case 'registration':
                return <RegistrationPage onNavigate={handleNavigate} />;
            case 'blog':
                return <BlogPage onNavigate={handleNavigate} />;
            case 'calculator':
                return <CalculatorPage onNavigate={handleNavigate} />;
            case 'confirmation':
                return <ConfirmationPage onNavigate={handleNavigate} />;
            default:
                return <RegistrationPage onNavigate={handleNavigate} />;
        }
    };

    return (
        <div className="App">
            {renderPage()}
        </div>
    );
};

export default App;
