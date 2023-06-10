import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";

const Edit = ({ product }) => {
    const { data, setData, put, errors } = useForm({
        name: product.name || "",
        price: product.price || "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route("products.update", product.id));
    }
    function destroy() {
        if (confirm("¿Seguro que desea eliminar el producto")) {
            Inertia.delete(route("products.destroy", product.id));
        }
    }

    return (
        <div className="mt-20">
            <div className="container flex flex-col justify-center mx-auto">
                <div>
                    <h1 className="mb-8 text-3xl font-bold">
                        <InertiaLink
                            href={route("products.index")}
                            className="text-indigo-600 hover:text-indigo-700"
                        >
                            Productos
                        </InertiaLink>
                        <span className="font-medium text-indigo-600"> /</span>
                        Editar
                    </h1>
                </div>
                <div className="max-w-3xl p-8 bg-white rounded shadow">
                    <form name="createForm" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <div className="mb-4">
                                <label className="">Title</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2"
                                    label="Nombre"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.name}
                                </span>
                            </div>
                            <div className="mb-4">
                                <label className="">Precio</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2"
                                    label="Precio"
                                    name="price"
                                    value={data.price}
                                    onChange={(e) =>
                                        setData("price", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.price}
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <button
                                type="submit"
                                className="px-4 py-2 text-white bg-green-500 rounded"
                            >
                                Actualizar
                            </button>
                            <button
                                onClick={destroy}
                                tabIndex="-1"
                                type="button"
                                className="px-4 py-2 text-white bg-red-500 rounded"
                            >
                                Eliminar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Edit;