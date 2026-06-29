export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#020617] px-5 py-20 text-white md:px-10">
      <div className="mx-auto max-w-6xl">

        <p className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          TESTIMONIALS
        </p>

        <h1 className="mt-4 text-center text-5xl font-bold">
          Trusted by growing clinics
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-400">
          Clinics use Mexa to automate patient communication, reduce missed
          appointments, and save hours every week.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <div className="card-interactive rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <div className="text-yellow-400 text-xl">★★★★★</div>
            <p className="mt-6 text-slate-300">
              "Our reception workload dropped dramatically after using Mexa.
              Patients receive instant replies even outside working hours."
            </p>

            <div className="mt-8">
              <h3 className="font-bold">Dr. Sarah Ahmed</h3>
              <p className="text-slate-500">Dental Clinic</p>
            </div>
          </div>

          <div className="card-interactive rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <div className="text-yellow-400 text-xl">★★★★★</div>
            <p className="mt-6 text-slate-300">
              "Appointment booking became much faster and our patients love the
              WhatsApp integration."
            </p>

            <div className="mt-8">
              <h3 className="font-bold">Dr. Michael Lee</h3>
              <p className="text-slate-500">Dermatology Clinic</p>
            </div>
          </div>

          <div className="card-interactive rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <div className="text-yellow-400 text-xl">★★★★★</div>
            <p className="mt-6 text-slate-300">
              "Mexa saves our team several hours every week. The automation is
              reliable and very easy to use."
            </p>

            <div className="mt-8">
              <h3 className="font-bold">Emma Wilson</h3>
              <p className="text-slate-500">Medical Center Manager</p>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}