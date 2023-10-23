import Layout from "../layouts/Layout";
import Button from "../Button";
import { Resolver, useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { PiWarningBold } from "react-icons/pi";

type FormValues = {
  email: string;
  password: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: !values.email ? {} : values,
    errors: !values.email
      ? {
          email: {
            type: "required",
            message: "Email tidak boleh kosong!",
          },
        }
      : {},
  };
};

const Login = () => {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(<FaEyeSlash className="h-6 w-6 text-gray-100" />);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(<FaEye className="h-6 w-6 text-gray-100" />);
      setType("text");
    } else {
      setIcon(<FaEyeSlash className="h-6 w-6 text-gray-100" />);
      setType("password");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: resolver,
  });

  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));

  return (
    <Layout nofooter>
      <section className="relative h-screen pt-[85px] bg-login bg-no-repeat bg-left-top bg-contain">
        <div className="flex flex-1 flex-col absolute left-[60%] top-[23%] min-w-[393px]">
          <p className="text-2xl font-label font-extrabold">Masuk</p>

          <div className="flex mt-3">
            <p className="text-sm text-gray-50 font-semibold">Belum punya akun?</p>
            <a href="#" className="text-sm text-blue-100 font-semibold ml-2 hover:underline">
              Daftar disini
            </a>
          </div>

          <form onSubmit={onSubmit} className="flex flex-col mt-8">
            <label className="relative text-sm font-label font-bold w-full">
              <div className="mb-3">Email</div>
              <input
                type="email"
                autoComplete="current-email"
                placeholder="Masukkan alamat email"
                className="appearance-none border rounded-lg border-gray-70 py-3 px-4 w-full focus:outline-none focus:ring-blue-100 focus:border-blue-100"
                {...register("email")}
              />
              {errors?.email && (
                <div className="mt-2 flex items-center gap-1 text-red-100">
                  <PiWarningBold className="h-4 w-4" />
                  <p className="text-xs">{errors.email.message}</p>
                </div>
              )}
            </label>

            <label className="relative text-sm font-label font-bold w-full mt-6">
              <div className="mb-3">Password</div>
              <input
                type={type}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                placeholder="Masukkan password"
                className="appearance-none border rounded-lg border-gray-70 py-3 px-4 w-full focus:outline-none focus:ring-blue-100 focus:border-blue-100"
              />

              <button
                onClick={handleToggle}
                type="button"
                className="h-6 w-6 right-0 top-[70%] absolute -translate-x-1/2 -translate-y-1/2"
              >
                {icon}
              </button>
            </label>

            <a href="#" className="text-sm text-blue-100 font-semibold mt-8 mb-4 hover:underline">
              Lupa password?
            </a>

            <Button type="submit" className="w-full">
              Masuk
            </Button>
          </form>

          <p className="text-sm text-gray-70 my-8">Atau masuk dengan</p>
          <Button className="mb-4" variant="google">
            Masuk dengan Google
          </Button>
          <Button variant="facebook">Masuk dengan Facebook</Button>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
