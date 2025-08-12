import Card_Recetas from "../Subcomponets/Card_Recetas";

export default function Section_Recetas() {
  return (
    <section className="w-full py-20 px-20 flex flex-col gap-20">
      <div className="text-center flex flex-col gap-2">
        <h1 className="text-4xl font-semibold">Simple and tasty recipes</h1>
        <p className="font-light">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim.
        </p>
      </div>
      <div className="flex items-center flex-wrap  w-full  justify-center gap-5">
        <Card_Recetas />
      </div>
    </section>
  );
}
