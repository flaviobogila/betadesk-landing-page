'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ContactContextType {
    isOpen: boolean;
    openContactForm: () => void;
    closeContactForm: () => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export function ContactProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openContactForm = () => setIsOpen(true);
    const closeContactForm = () => setIsOpen(false);

    return (
        <ContactContext.Provider value={{ isOpen, openContactForm, closeContactForm }}>
            {children}
        </ContactContext.Provider>
    );
}

export function useContactForm() {
    const context = useContext(ContactContext);
    if (context === undefined) {
        throw new Error('useContactForm must be used within a ContactProvider');
    }
    return context;
}
