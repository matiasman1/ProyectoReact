import { useForm } from "../../hooks/useForm";

const FormComponent = () => {
  const {values, handleChange, resetForm} = useForm({
    email: "",
    nombre: "",
    edad: 0,
  });

  const { email, nombre, edad } = values;

  const handleSubmitForm = () => {
    console.log(values);
  };

  const handleResetForm = () => {
    resetForm();
  };

  return (
    <div>
      <div>
        <h2>Formulario</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
        <input
          onChange={handleChange}
          name="email"
          value={email}
          type="email"
          placeholder="example@example.com"
        />
        <input
          onChange={handleChange}
          name="nombre"
          value={nombre}
          type="text"
          placeholder="Nombre"
        />
        <input
          onChange={handleChange}
          name="edad"
          value={edad}
          type="number"
          placeholder="Edad"
        />
      </div>
      <div>
        <button onClick={handleSubmitForm}>Enviar</button>
        <button onClick={handleResetForm}>Resetear</button>
      </div>
    </div>
  );
};

export default FormComponent;
