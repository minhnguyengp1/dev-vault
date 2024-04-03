import React from 'react';
import PageLayout from '../components/PageLayout.tsx';

const Components: React.FC = () => {
    return (
        <PageLayout title="Welcome to TaskCompact">
            <p>
                TaskCompact is a task manager that helps you organize your tasks
                and get things done. It is simple, easy to use, and free.
            </p>
            <p>
                To get started, create an account or sign in with your existing
                account.
            </p>
        </PageLayout>
    );
};

export default Components;
