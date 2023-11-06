import '@/app/ui/global.css';
import NavBar from './ui/navbar/navbar';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="absolute top-0 left-0 right-0">
                <NavBar />
                {children}
            </body>
        </html>
    );
}
