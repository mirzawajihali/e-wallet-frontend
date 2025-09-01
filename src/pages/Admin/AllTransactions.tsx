
import ErrorBoundary from '@/components/ErrorBoundary';
import React from 'react';
import TransactionTable from '@/modules/Admin/TransactionTable';

const AllTransactions: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-6">
            <ErrorBoundary>
                <TransactionTable
                    title="All Transactions"
                    description="Complete list of all transactions across the platform"
                    showUserInfo={true}
                />
            </ErrorBoundary>
        </div>
    );
};

export default AllTransactions;