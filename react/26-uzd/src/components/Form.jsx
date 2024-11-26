import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:8080/animals", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Response error!");
      } else {
        navigate("/success");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="col-4 mx-auto">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="form-control"
          {...register("name", { required: true, pattern: /^[A-Z][a-z]+$/ })}
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Name field cannot be empty</p>
        )}
        {errors.name?.type === "pattern" && (
          <p className="text-danger">
            Name must start with an uppercase letter
          </p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="type" className="form-label">
          Type
        </label>
        <input
          type="text"
          id="type"
          className="form-control"
          {...register("type", { required: true, minLength: 2, maxLength: 50 })}
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Type field cannot be empty</p>
        )}
        {(errors.name?.type === "minLength" ||
          errors.name?.type === "maxLength") && (
          <p className="text-danger">
            Type field must be between 2 and 50 characters long
          </p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="breed" className="form-label">
          Breed
        </label>
        <input
          type="text"
          id="breed"
          className="form-control"
          {...register("breed", {
            required: true,
            minLength: 2,
            maxLength: 100,
            pattern: /^[A-Z][a-z]+$/,
          })}
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Breed field cannot be empty</p>
        )}
        {(errors.name?.type === "minLength" ||
          errors.name?.type === "maxLength") && (
          <p className="text-danger">
            Breed field must be between 2 and 100 characters long
          </p>
        )}
        {errors.name?.type === "pattern" && (
          <p className="text-danger">
            Breed must start with an uppercase letter
          </p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          type="number"
          id="age"
          className="form-control"
          {...register("age", { required: true, min: 1, max: 100 })}
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Age field cannot be empty</p>
        )}
        {(errors.name?.type === "min" || errors.name?.type === "max") && (
          <p className="text-danger">Age field must be between 1 and 100</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="weight" className="form-label">
          Weight
        </label>
        <input
          type="number"
          id="weight"
          step="0.01"
          className="form-control"
          {...register("weight", { required: true, min: 0.05 })}
        />
        {errors.name?.type === "min" && (
          <p className="text-danger">Weight field must be atleast 0.05</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="gender" className="form-label">
          Gender
        </label>
        <input
          type="text"
          id="gender"
          className="form-control"
          {...register("gender", { required: true })}
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Gender field cannot be empty</p>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
