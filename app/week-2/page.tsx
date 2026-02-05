import StudentInfo from "@/app/week-2/student.info";

export default function Week2Page() {
  return (
    <main>
      <h1>Week 2</h1>
      <div className = "min-h-screen bg-rose-50 p-8">
        {/* Render the StudentInfo component */}
        <section className = "max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6 border border-rose-200">
          <StudentInfo />
        </section>
      </div>
    </main>
  );
}
