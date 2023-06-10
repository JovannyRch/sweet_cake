import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";

export default function Home({ auth, products }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Inicio" />

            <div >
                <div className="mb-6">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight mb-10">Productos</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {products.map(({ id, name, description, price, img }) => (
                            <Card className="mt-6 w-96" key={id}>
                                <CardHeader color="blue-gray" className="relative h-56">
                                    <img src={`/images/${img}`} alt="img-blur-shadow" layout="fill" />
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        {name}
                                    </Typography>
                                    <Typography>
                                        {description}
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0 flex flex-col gap-2 justify-between">
                                    <Button>Agregar al carrito</Button>
                                    <Button>Personalizar</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                </div>
            </div>

        </AuthenticatedLayout>
    );
}
