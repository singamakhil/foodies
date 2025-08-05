export default async function MealDetailsPage({ params }) {
  return (
    <div>
      <h1>Meal</h1>
      <p>your meal is {await params.smug}</p>
    </div>
  );
}
