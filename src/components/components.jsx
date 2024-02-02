import { useState } from "react"
import Form from "./form/form";
import Display from "./display"

export default function Components() {
  const [form, setForm] = useState({toEdit: true, data: ''})

  const handleSubmit = (event) => {
    setForm({...form, toEdit: false, data: event.target})

    event.preventDefault();
  };

  const handleEdit = () =>
    setForm({...form, toEdit: true}
  );

  return (
    <div className="main">
      {form.toEdit ? (
        <Form
          formData={form.data}
          toSubmit={handleSubmit}
        />
      ) : (
        <Display
          formData={form.data}
          toEdit={handleEdit}
        />
      )}
    </div>
  )
}
