import React from "react";
import { Head } from "@inertiajs/react";
import moment from "moment";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import AdminAuthenticatedLayout from "../../Layouts/AdminAuthenticatedLayout";


const TABLE_HEAD = ["# Pedido", "Cantidad productos", "Empleado", "Estatus"];



const Index = ({ auth, penging_orders, delivered_orders }) => {


    return (
        <AdminAuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <Card className="w-full h-full overflow-scroll">
                <CardBody>

                    <div className="flex items-center justify-between mb-6">
                        <Typography color="blueGray" className="text-2xl font-bold text-violet-600" >
                            Ordenes pendientes
                        </Typography>
                    </div>
                    <table className="w-full text-left table-auto min-w-max">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th key={head} className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {penging_orders.map(({ id, products, user }, index) => {
                                const isLast = index === penging_orders.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={id}>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {id}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {products.length}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {user.name}
                                            </Typography>
                                        </td>

                                        <td className={classes}>
                                            <a
                                                tabIndex="1"
                                                className="px-4 py-2 text-sm text-white bg-indigo-600 rounded"
                                                href={route("orders.show", id)}
                                            >
                                                Ver
                                            </a>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </CardBody>
            </Card>

            <Card className="w-full h-full mt-10 overflow-scroll">

                <CardBody>
                    <div className="flex items-center justify-between mb-6">
                        <Typography color="blueGray" className="text-2xl font-bold text-violet-600">
                            Ordenes entregadas
                        </Typography>
                    </div>
                    <table className="w-full text-left table-auto min-w-max">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th key={head} className="p-4 border-b border-blue-gray-100 bg-gray-50">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {delivered_orders.map(({ id, products, user }, index) => {
                                const isLast = index === delivered_orders.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={id}>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {id}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {products.length}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {user.name}
                                            </Typography>
                                        </td>

                                        <td className={classes}>

                                            <a
                                                tabIndex="1"
                                                className="px-4 py-2 text-sm text-white bg-indigo-600 rounded"
                                                href={route("orders.show", id)}
                                            >
                                                Ver
                                            </a>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </CardBody>
            </Card>


        </AdminAuthenticatedLayout>
    );
};

export default Index;