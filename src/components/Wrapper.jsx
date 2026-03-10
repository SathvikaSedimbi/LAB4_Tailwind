export default function Wrapper({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md space-y-6">
        {children}
      </div>
    </div>
  );
}