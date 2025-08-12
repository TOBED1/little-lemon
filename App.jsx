import BookingForm from "./components/BookingForm";

function App() {
  return (
    <>
      <header className="bg-green-700 text-white px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">🍋 Little Lemon</h1>
          <nav>
            <ul className="flex gap-6 text-lg">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#booking" className="hover:underline">Book a Table</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="min-h-screen font-sans text-gray-800">
        <section
          className="bg-yellow-100 py-16 px-6 text-center sm:text-left sm:px-12"
          aria-labelledby="hero-heading"
        >
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="sm:w-2/3">
              <h2 id="hero-heading" className="text-4xl sm:text-5xl font-bold mb-4">
                Welcome to Little Lemon
              </h2>
              <p className="text-lg sm:text-xl mb-6">
                A cozy spot serving Mediterranean-inspired cuisine with a modern twist. Book a table today!
              </p>
              <a
                href="#booking"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition"
              >
                Book Now
              </a>
            </div>
            <div className="hidden sm:block sm:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
                alt="Interior of Little Lemon restaurant"
                className="rounded-xl shadow-md w-full object-cover h-64"
              />
            </div>
          </div>
        </section>

        <section id="booking" className="py-12 px-6 bg-white" aria-labelledby="booking-heading">
          <h2 id="booking-heading" className="sr-only">Book a Table Section</h2>
          <BookingForm />
        </section>
      </main>

      <footer className="bg-gray-100 text-center py-6 text-sm text-gray-600">
        <p>&copy; 2025 Little Lemon. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
