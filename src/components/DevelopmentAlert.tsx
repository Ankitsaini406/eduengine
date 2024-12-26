'use client';

import { useEffect } from "react";
import { Alert, AlertDescription } from "./ui/alert";


function DevelopmentAlert () {

    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            const handleContextMenu = (e: MouseEvent) => {
                e.preventDefault();
            }

            document.addEventListener('contextmenu', handleContextMenu);

            return () => {
                document.removeEventListener('contextmenu', handleContextMenu);
            };
        }
    }, []);

    return (
        process.env.NODE_ENV === 'development' ? null : (
            <Alert className="sticky top-0 left-0 w-full rounded-none bg-red-400 text-center border-none" role="alert">
                <AlertDescription>
                    Our platform is currently under development mode. Coming Soon...
                </AlertDescription>
            </Alert>
    )
    );
};

export default DevelopmentAlert;
