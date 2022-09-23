interface Disclosure {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
}

declare function useDisclosure(defaultIsOpen?: unknown): Disclosure;
export default useDisclosure;
