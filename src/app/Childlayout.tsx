import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import TailwindIndicator from "@/lib/Tailwindindicator";

export default function ChildLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {children}                
            </main>
            <TailwindIndicator />
            <Footer />
        </div>
    );
}