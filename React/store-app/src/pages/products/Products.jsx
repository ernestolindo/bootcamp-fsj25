import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { db } from "../../firebase/config";

export const Products = () => {
  const { register, handleSubmit } = useForm();

  const addProduct = async (data) => {
    console.log(data);
    // Enviar a firestore
    const response = await addDoc(collection(db, "products"), data);
    console.log(response);
  };
  return (
    <>
      <h2>Productos</h2>

      <form onSubmit={handleSubmit(addProduct)}>
        <section>
          <label htmlFor="">Nombre de producto</label>
          <input type="text" {...register("name")} />
        </section>
        <section>
          <label htmlFor="">Precio</label>
          <input type="number" {...register("price")} />
        </section>
        <section>
          <label htmlFor="">Cantidad</label>
          <input type="number" {...register("stock")} />
        </section>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};
