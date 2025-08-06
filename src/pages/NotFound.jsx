import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 px-4 text-center">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-2xl font-semibold mb-2">Page Not Found</p>
            <p className="mb-6">Sorry, the page you're looking for doesn't exist or has been moved.</p>
            <Link
                to="/"
                className="uppercase w-max font-bold bg-black text-white px-4 py-2"
            >
                go Home
            </Link>
        </div>
    );
}
