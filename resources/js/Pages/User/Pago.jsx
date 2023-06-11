import React, { useState } from 'react'
import {
    Typography,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    List,
    ListItem,
    Stepper, Step, IconButton, Card, CardBody
} from "@material-tailwind/react";
import { XMarkIcon, CogIcon, ListBulletIcon } from "@heroicons/react/24/outline";
import { formatCurrency } from '../../Utils';


const getSize = (multiplier) => {
    switch (multiplier) {
        case 1:
            return '20 personas'
        case 1.5:
            return '30 personas'
        case 2:
            return '40 personas'
        case 2.5:
            return '50 personas'
        default:
            return '20 personas'
    }
}


const Summary = ({ shoppingCart, setShoppingCart }) => {

    const handleRemoveItem = (index) => {
        const newShoppingCart = [...shoppingCart]
        newShoppingCart.splice(index, 1)
        setShoppingCart(newShoppingCart)
    }

    return <>

        <Typography color="gray" className="font-bold px-5 text-lg mb-5">Resumen de pedido</Typography>
        <div className="overflow-scroll" style={{ maxHeight: 350 }}>
            <List>
                {
                    shoppingCart.map((item, index) => (
                        <ListItem key={index} className='mb-5'>
                            <Card className='w-full'>
                                <CardBody>
                                    <div className='flex flex-col w-full'>
                                        <div className='flex justify-between w-full mb-5' >
                                            <Typography color="gray" className="font-bold text-lg">{item.name}</Typography>
                                            <Typography color="gray" className="font-bold text-lg">{formatCurrency(item.price * item.multiplier)}</Typography>

                                            <div>
                                                <IconButton color='red' onClick={() => handleRemoveItem(index)}>
                                                    <XMarkIcon className="h-5 w-5" />
                                                </IconButton>
                                            </div>
                                        </div>
                                        <div>
                                            <span className='font-bold'>Tamaño:</span> {getSize(item.multiplier)}
                                        </div>
                                        {
                                            item.extraIngredients.length > 0 && <div className='mt-5'>
                                                <h3 className='font-bold mb-3'>Ingredientes extra</h3>
                                                <ul>
                                                    {
                                                        item.extraIngredients.map((ingredient, index) => (
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
        </div>
    </>;

}


const Pago = ({ isVisible, onClose, shoppingCart, total, setShoppingCart }) => {

    const [activeStep, setActiveStep] = useState(0)


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleNext = () => {
        if (activeStep === 0) {
            setActiveStep(1)
        }

    }

    const handleBack = () => {
        setActiveStep(activeStep - 1)
    }

    const isLastStep = activeStep === 3;

    return (
        <Dialog open={isVisible}  >
            <DialogHeader>
                <div className='flex justify-between w-full'>
                    <span>
                        Generar pedido
                    </span>
                    <span>
                        Total: {formatCurrency(total)}
                    </span>
                </div>
            </DialogHeader>
            <DialogBody divider>

                <div className='px-5 mb-5'>
                    <Stepper
                        activeStep={activeStep}

                    >
                        <Step onClick={() => setActiveStep(0)}>
                            <ListBulletIcon className="h-5 w-5" />
                        </Step>
                        <Step onClick={() => setActiveStep(1)}>
                            <ListBulletIcon className="h-5 w-5" />
                        </Step>
                        <Step onClick={() => setActiveStep(2)}>
                            <ListBulletIcon className="h-5 w-5" />
                        </Step>
                    </Stepper>
                </div>

                {activeStep === 0 && <Summary shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />}

            </DialogBody>
            <DialogFooter>
                <div className='w-full  flex justify-between'>
                    <Button
                        variant="text"
                        onClick={onClose}
                        className="mr-1"
                    >
                        <span>Cancelar</span>
                    </Button>
                    <div>
                        {
                            activeStep !== 0 && <Button variant="text" color="indigo" onClick={handleBack}>
                                Regresar
                            </Button>
                        }
                        <Button variant={isLastStep ? 'filled' : 'text'} color="indigo" onClick={handleNext}>
                            <span>
                                {activeStep === 3 ? 'Finalizar' : 'Siguiente'}
                            </span>
                        </Button>
                    </div>
                </div>
            </DialogFooter>
        </Dialog>
    )
}

export default Pago