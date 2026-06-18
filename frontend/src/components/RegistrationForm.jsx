import { useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

const RegistrationForm = () => {
  const [loading, setLoading] =
    useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim())
      return toast.error("Name required");

    if (!/^\d{10}$/.test(form.phone))
      return toast.error(
        "Phone must be 10 digits"
      );

    try {
      setLoading(true);

      const res = await API.post(
        "/enquiry",
        form
      );

      toast.success(res.data.message);

      setForm({
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      toast.error("Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">

        <h2 className="text-4xl font-bold mb-8">
          Register Now
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            className="w-full border p-3 rounded"
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            className="w-full border p-3 rounded"
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Phone"
            value={form.phone}
            className="w-full border p-3 rounded"
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
          />

          <button
            disabled={loading}
            className="w-full bg-blue-600 cursor-pointer text-white py-3 rounded-lg"
          >
            {loading
              ? "Submitting..."
              : "Register"}
          </button>
        </form>

      </div>

    </section>
  );
};

export default RegistrationForm;