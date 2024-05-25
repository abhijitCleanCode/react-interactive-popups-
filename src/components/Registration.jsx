import React, { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition } from '@headlessui/react'

import { Button } from "./index";

const Values = {
    name: '',
    number: ''
};

const Registration = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [registrationValue, setRegistrationValue] = useState(Values);

    const sendData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(registrationValue),
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                throw new Error(`Error submitting data: ${response.statusText}`);
            }

            const data = await response.json();
            console.log('Data submitted successfully:', data);
        } catch (error) {
            console.log("src :: components :: registration :: sendData: ", error);
        }
    }

    const onInputChange = (e) => {
        setRegistrationValue({ ...registrationValue, [e.target.name]: e.target.value });
        console.log(registrationValue);

        sendData();
    }

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Registration</Button>

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
                        <DialogPanel className="max-w-lg space-y-4 card-neumorphism p-12">
                            <DialogTitle className="text-2xl font-bold blue-text-gradient pb-2">Registration</DialogTitle>

                            <div className="w-full flex flex-col justify-center items-center gap-2">
                                <label
                                    className='inline-block mb-1 pl-1 font-bold text-[#DC7364]'
                                    htmlFor="name">Name
                                </label>
                                <input type="text"
                                    className='px-3 py-2 rounded-lg bg-transparent text-black outline-none focus:bg-[#523E56] duration-200 border border-[#DC7364] w-full'
                                    id="name"
                                    name='name'
                                    onChange={onInputChange}
                                />
                            </div>

                            <div className="w-full flex flex-col justify-center items-center gap-2">
                                <label
                                    className='inline-block mb-1 pl-1 font-bold text-[#DC7364]'
                                    htmlFor="Number">Number
                                </label>
                                <input type="number"
                                    className='px-3 py-2 rounded-lg bg-transparent text-black outline-none focus:bg-[#523E56] duration-200 border border-[#DC7364] w-full'
                                    id="number"
                                    name='number'
                                    onChange={onInputChange}
                                />
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

export default Registration