import NewItem from "./NewItem";

export default function Page() {
    return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-8">
    <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white mb-2">
            Shopping List
            </h1>
            <p className="text-slate-400 text-lg">
            Week 5 - Controlled Components & Event Handling
            </p>
        </div>
        
        <NewItem></NewItem>
        
        <div className="mt-8 text-center">
            <a 
            href="/"
            className="text-blue-400 hover:text-blue-300 underline transition-colors">
            
            ← Back to Home
            </a>
        </div>
    </div>
    </main>
);
}