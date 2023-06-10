import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const Index = ({ products: data}) => {

    console.log("data", data);
    return (
        <div>
            <div className="container mx-auto">
                <h1 className="mb-8 text-3xl font-bold text-center">Productos</h1>
                <div className="flex items-center justify-between mb-6">
                    <InertiaLink
                        className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                        href={route("products.create")}
                    >
                        Crear Producto
                    </InertiaLink>
                </div>

                <div className="overflow-x-auto bg-white rounded shadow">
                    <table className="w-full whitespace-nowrap">
                        <thead className="text-white bg-gray-600">
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">#</th>
                                {/* Add image */}
                                <th className="px-6 pt-5 pb-4">Imagen</th>
                                <th className="px-6 pt-5 pb-4">Nombre</th>
                                <th className="px-6 pt-5 pb-4">Precio</th>
                                <th className="px-6 pt-5 pb-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(({ id, name, price, img }) => (
                                <tr key={id} className="">
                                        

                                        
                                    <td className="border-t">
                                        <InertiaLink
                                            href={route("products.edit", id)}
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {id}
                                        </InertiaLink>
                                    </td>
                                    <td className="border-t">
                                        <InertiaLink
                                            href={route("products.edit", id)}
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            <img src={`/images/${img}`} alt="imagen" className="w-20 h-20 rounded-full"/>
                                        </InertiaLink>

                                    </td>
                                    <td className="border-t">
                                        <InertiaLink
                                            href={route("products.edit", id)}
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {name}
                                        </InertiaLink>
                                    </td>
                                    <td className="border-t">
                                        <InertiaLink
                                            tabIndex="1"
                                            className="flex items-center px-6 py-4"
                                            href={route("products.edit", id)}
                                        >
                                            {price}
                                        </InertiaLink>
                                    </td>
                                    <td className="border-t">
                                        <InertiaLink
                                            tabIndex="1"
                                            className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                            href={route("products.edit", id)}
                                        >
                                            Edit
                                        </InertiaLink>
                                    </td>
                                </tr>
                            ))}
                            {data.length === 0 && (
                                <tr>
                                    <td
                                        className="px-6 py-4 border-t"
                                        colSpan="4"
                                    >
                                        No se encontraron products.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Index;