// app/page.tsx
import ItemList from "./item.list";

// -------- MAIN PAGE COMPONENT --------
// This component represents the home page of the app
export default function Page() {
  return (
    // Full-page container with soft pastel background
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-rose-50 to-purple-50 p-8">
      
      {/* Page title */}
      <h1 className="text-4xl font-extrabold text-rose-700 mb-6 text-center">
        🛒 Shopping List
      </h1>

      {/* Card wrapper to center and contain the list */}
      <section className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6 border border-rose-200">
        <ItemList />
      </section>

    </main>
  );
}