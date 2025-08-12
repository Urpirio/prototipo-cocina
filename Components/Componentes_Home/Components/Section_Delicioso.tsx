import Card_Delicias from "../Subcomponets/Card_Delicias";

export default function Section_Delicioso() {
  return (
    <section className="px-18 py-20 flex flex-col gap-5">
      <div className="flex items-center">
        <h2 className="text-5xl font-semibold w-1/2">Try this delicious recipe to make your day</h2>
        <p className="w-1/2 text-gray-500">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
      </div>
      <div className="flex gap-8 py-10 flex-wrap">
        <Card_Delicias/>
      </div>
    </section>
  );
}
