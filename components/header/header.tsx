import Image from 'next/image'
import React, { useState } from 'react'
import { LuMenu } from 'react-icons/lu'
import CustomButton from '../button/Button'
import { HStack, VStack } from '@chakra-ui/react';

export default function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className='p-3 overflow-hidden'>
            <div className="flex items-center justify-between ">
                <Image className='cursor-pointer' alt='Logo' src={'Logo.svg'} width={100} height={40} quality={1} />
                <LuMenu onClick={toggleMobileMenu} className='flex md:hidden cursor-pointer' />
                <ul className='hidden items-center gap-3 md:flex'>
                    <li>Home</li>
                    <li>Product</li>
                    <li>
                        <CustomButton size='sm' text='Login' variant='outline' />
                    </li>
                    <li>
                        <CustomButton size='sm' text='Get Started' variant='solid' />
                    </li>
                </ul>
                {isMobileMenuOpen && (
                    <VStack className={`${isMobileMenuOpen ? 'block' : 'hidden'
                        } md:hidden absolute top-0 left-0 h-full w-64 bg-gray-100 z-10 p-4 transition-transform duration-200 ease-in-out transform`}
                    >
                        <li className='block'>Home</li>
                        <li className='block'>Product</li>
                        <li className='block'>
                            <CustomButton size='sm' text='Login' variant='outline' />
                        </li>
                        <li className='block'>
                            <CustomButton size='sm' text='Get Started' variant='solid' />
                        </li>
                    </VStack>
                )}

            </div>
            <hr className='border border-gray-300 mt-2' />
        </div>
    )
}
