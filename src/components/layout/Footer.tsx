
export default function Footer() {
    return (
        <footer className="flex items-center justify-center w-full h-16 bg-background border-t">
            <div className="container flex items-center justify-between px-4 mx-auto">
                <p className="text-sm text-muted-foreground">© 2024 Eduengine. All rights reserved.</p>
                <nav className="flex space-x-4">
                    <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</a>
                    <a href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</a>
                </nav>
            </div>
        </footer>
    );
}