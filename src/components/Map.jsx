import React, { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition } from '@headlessui/react';

import { Button } from "./index";

const Map = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Google map</Button>

            <Transition
                show={isOpen}
                enter="duration-200 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="duration-300 ease-out"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Dialog onClose={() => setIsOpen(false)} className="relative z-50 transition">
                    <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                        <DialogPanel className="w-full md:w-1/2 space-y-4 card-neumorphism p-12">
                            <DialogTitle className="text-2xl font-bold blue-text-gradient pb-2">Google Map</DialogTitle>

                            <div className="map-responsive">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14488.5840402758!2d92.7833550513733!3d24.790453347597335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e4a1950aa6ca1%3A0x44b1cad9fd1f8025!2sMeherpur%2C%20Birbal%20Bazar%2C%20Silchar%2C%20Assam!5e0!3m2!1sen!2sin!4v1716638671002!5m2!1sen!2sin" width="600" height="450" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>

                            <div className="flex justify-center gap-4">
                                <Button onClick={() => setIsOpen(false)} bgColor="bg-[#0B1531]">Close</Button>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Map