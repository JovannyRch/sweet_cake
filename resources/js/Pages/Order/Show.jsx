import React, { useMemo } from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";
import moment from "moment";
import { Card, CardBody, List, ListItem, Typography } from "@material-tailwind/react";
import { formatCurrency } from "../../Utils";
import { getSize } from "../User/Pago";

const Show = ({ auth, order: initialOrder }) => {

    const order = useMemo(() => {
        return {
            ...initialOrder,
            products: JSON.parse(initialOrder.products),
            delivery_data: JSON.parse(initialOrder.delivery_data),

        }
    }, [initialOrder])

    console.log(order);


    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Orden" />


            <div className="container flex flex-col justify-center mx-auto">
                <div className="flex justify-between">
                    <h1 className="mb-8 text-3xl font-bold">
                        Orden #{order.id}
                    </h1>
                    <h4 className="text-right">
                        Creado por {order.user.name}
                        <br />
                        el {moment(order.created_at).format('DD MMMM YYYY')}
                    </h4>
                </div>



                <div className="flex flex-col">

                    <div>
                        <Card>

                            <CardBody>
                                <Typography className="text-lg">
                                    <span className="font-bold ">Entrega: </span>{order.delivery_type}
                                </Typography>


                                <Typography className="font-semibold text-md mt-3">
                                    Datos de entrega
                                </Typography>
                                {
                                    order.delivery_type === 'Sucursal' && <>
                                        <Typography color="gray" >Nombre del cliente: {order?.delivery_data?.clientName ?? '-'}</Typography>
                                        <Typography color="gray" >Fecha de entrega: {moment(order?.delivery_data?.date).format('DD-MM-YYYY') ?? '-'} a las  {order?.delivery_data?.time ?? '-'} hrs</Typography>
                                    </>
                                }

                            </CardBody>
                        </Card>




                        <Card className="mt-5">

                            <CardBody>
                                <Typography>
                                    <span className="font-bold">Tipo de pago: </span>{order.payment_method_type}
                                </Typography>



                            </CardBody>
                        </Card>
                    </div>


                    <h1 className="text-2xl font-bold mt-5">Productos</h1>
                    <List>
                        {
                            order.products.map((item, index) => (
                                <ListItem key={index} className='mb-5'>
                                    <Card className='w-full'>
                                        <CardBody>
                                            <div className='flex flex-col w-full'>
                                                <div className='flex justify-between w-full mb-5' >
                                                    <Typography color="gray" className="font-bold text-lg">{item.name}</Typography>
                                                    <Typography color="gray" className="font-bold text-lg">{formatCurrency(item.price * item.multiplier)}</Typography>


                                                </div>
                                                <div>
                                                    <span className='font-bold'>Tamaño:</span> {getSize(item.multiplier)}
                                                </div>
                                                {
                                                    item?.ingredients?.length > 0 && <div className='mt-5'>
                                                        <h3 className='font-bold mb-3'>Ingredientes extra</h3>
                                                        <ul>
                                                            {
                                                                item?.ingredients?.map((ingredient, index) => (
                                                                    <li key={index}>
                                                                        {ingredient.name} + {formatCurrency(ingredient.price * item.multiplier)}
                                                                    </li>
                                                                ))}
                                                        </ul>
                                                    </div>
                                                }
                                            </div>
                                        </CardBody>
                                    </Card>
                                </ListItem>
                            ))
                        }
                    </List>


                    <div className="flex mt-8 justify-between">
                        <div>
                            <h1 className="text-2xl font-bold">
                                {order.status === 'pending' ? <span className="text-yellow-600">Pendiente de entrega</span> : <span className="text-green-600">Entregado</span>}
                            </h1>
                        </div>
                        <div className="flex flex-row justify-between">
                            <h1 className="text-4xl font-bold text-violet-600">Total: {formatCurrency(order.total)}</h1>
                        </div>
                    </div>
                </div>

            </div>

        </AuthenticatedLayout>
    );
};

export default Show;