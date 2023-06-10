import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";

const Create = ({ error }) => {
    const { data, setData, errors, post, progress } = useForm({
        name: "",
        price: "",
        image: null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("products.store"));
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
                        <span className="font-medium text-indigo-600"> / </span>
                        Crear
                    </h1>
                </div>
                <div className="max-w-6xl p-8 bg-white rounded shadow"> 
                    
                    <form name="createForm" encType="multipart/form-data"  onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <div className="mb-4">
                                <label className="">Nombre</label>
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
                                    type="number"
                                    className="w-full rounded"
                                    label="Precio"
                                    name="price"
                                    errors={errors.price}
                                    value={data.price}
                                    onChange={(e) =>
                                        setData("price", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.price}
                                </span>
                            </div>
                            <div className="mb-4">
                                <label className="">Imagen</label>
                                <input
                                    type="file"
                                    className="w-full px-4 py-2"
                                    label="Imagen"
                                    name="image"
                                    onChange={(e) =>
                                        setData("image", e.target.files[0])
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.image}
                                </span>
                            </div>
                            
                        </div>
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                            >
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Create;