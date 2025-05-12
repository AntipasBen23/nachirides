export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">Welcome to Nachirides</h1>
        <p className="mt-3 text-xl text-center">Get started by signing in</p>
        
        <div className="mt-8">
          <a 
            href="/login" 
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Sign In
          </a>
        </div>
      </div>
    </main>
  );
}