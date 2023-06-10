import { Head } from '@inertiajs/react';
import AdminAuthenticatedLayout from '../Layouts/AdminAuthenticatedLayout';

export default function Dashboard({ auth }) {
    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="text-gray-900">You're logged in!</div>
        </AdminAuthenticatedLayout>
    );
}
