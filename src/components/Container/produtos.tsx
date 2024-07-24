import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

export function Container({ children }: ContainerProps) {
    return (
        <div className="w-full mx-auto px-4 sm:px-6 md:px-8 max-w-5xl">
            {children}
        </div>
    );
}
