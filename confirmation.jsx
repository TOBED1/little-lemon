export default function Confirmation({ name }) {
  return (
    <section className="text-center py-16 px-4 bg-green-50">
      <h2 className="text-3xl font-bold mb-4">🎉 Thank you for booking, {name}!</h2>
      <p className="text-lg">We’ve received your reservation and can’t wait to see you at Little Lemon.</p>
    </section>
  );
}
