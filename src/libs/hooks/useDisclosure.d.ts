interface Disclosure {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
}

declare function useDisclosure(defaultIsOpen: any): Disclosure;
export default useDisclosure;
