import ItemList from "@/app/week-5/item-list";

export default function Page() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-rose-50">
            <h1 className="text-4xl font-extrabold text-rose-700 mb-6 text-center">
                Shopping List 📒
            </h1>

            {/* Card wrapper to center and contain the list */}
            <section className="max-w-xl w-full mx-auto bg-white rounded-2xl shadow-lg p-6 border border-rose-200">
                <ItemList />
            </section>
        </main>
    );
}