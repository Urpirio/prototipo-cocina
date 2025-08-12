import Section_Categoria from "../../Components/Componentes_Home/Components/Section_Categoria";
import Section_Everyone from "../../Components/Componentes_Home/Components/Section_Everyone";
import Section_Instagram from "../../Components/Componentes_Home/Components/Section_Instagram";
import Section_Presentacion from "../../Components/Componentes_Home/Components/Section_Presentacion";
import Section_Recetas from "../../Components/Componentes_Home/Components/Section_Recetas";

export default function page() {
  return (
    <main className="py-5 flex flex-col items-center">
      <Section_Presentacion />
      <Section_Categoria />
      <Section_Recetas />
      <Section_Everyone />
      <Section_Instagram/>
    </main>
  );
}
