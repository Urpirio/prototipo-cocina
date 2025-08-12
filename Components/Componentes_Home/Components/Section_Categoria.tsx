import Card_Categorias from "../Subcomponets/Card_Categorias";

export default function Section_Categoria() {
  return (
    <section className="w-full px-20 py-10">
      <div className="flex items-center justify-between py-5 w-full">
        <h3 className="text-5xl font-semibold">Categories</h3>
        <button className="p-3 bg-[#E7FAFE] font-semibold cursor-pointer hover:opacity-80 hover:scale-105 transition-all duration-300  rounded-2xl">
          View All Categories
        </button>
      </div>
      <div className="flex items-center justify-between">
        <Card_Categorias />
      </div>
    </section>
  );
}
