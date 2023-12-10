import Layout from "../layouts/Layout";
import Button from "../Button";
import { FieldValues, Resolver, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { PiWarningBold } from "react-icons/pi";
import Input from "../Input";
import Link from "next/link";
import { REG_EXP } from "@/constants/regexp";

type FormValues = {
  email: string;
  password: string;
};

// const resolver: Resolver<FormValues> = async (values) => {
//   return {
//     values: !values.email ? {} : values,
//     errors: !values.email
//       ? {
//           email: {
//             type: "required",
//             message: "Email tidak boleh kosong!",
//           },
//         }
//       : {},
//   };
// };

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(<FaEyeSlash className="h-6 w-6 text-gray-100" />);

  // const handleToggle = () => {
  //   if (type === "password") {
  //     setIcon(<FaEye className="h-6 w-6 text-gray-100" />);
  //     setType("text");
  //   } else {
  //     setIcon(<FaEyeSlash className="h-6 w-6 text-gray-100" />);
  //     setType("password");
  //   }
  // };

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormValues>({
  //   resolver: resolver,
  // });

  // const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);

    if (type === "password" && !showPassword) {
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
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <Layout nofooter>
      <section>
        <div className="h-screen">
          <img src="/assets/login-bg.png" alt="bg login" className="h-full w-1/2" />
        </div>
        <div className="flex flex-1 flex-col absolute left-[60%] top-[23%] min-w-[393px]">
          <p className="text-2xl font-label font-extrabold">Masuk</p>

          <div className="flex mt-3">
            <p className="text-sm text-gray-50 font-semibold">Belum punya akun?</p>
            <a href="#" className="text-sm text-blue-100 font-semibold ml-2 hover:underline">
              Daftar disini
            </a>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-8">
            <div className="flex flex-col gap-4 relative">
              <Input
                id="email"
                label="Email"
                placeholder="Masukkan alamat email"
                register={register}
                errors={errors}
                required={{ value: true, message: "Email tidak boleh kosong!" }}
                pattern={{ value: REG_EXP.email, message: "Email tidak valid!" }}
              />
              <Input
                id="password"
                label="Password"
                placeholder="Masukkan password"
                register={register}
                errors={errors}
                type={type}
                required={{ value: true, message: "Password tidak boleh kosong!" }}
              />
              <button
                onClick={handleShowPassword}
                type="button"
                className={`h-6 w-6 right-0 absolute -translate-x-1/2 -translate-y-1/2 
                ${
                  errors.email && errors.password
                    ? "top-[165px]"
                    : `${
                        errors.email
                          ? "top-[165px]"
                          : `${errors.password ? "top-[75%]" : "top-[86%]"}`
                      }`
                }
                `}
              >
                {icon}
              </button>
            </div>

            <Link
              href="#"
              className="text-sm text-blue-100 font-semibold mt-8 mb-4 hover:underline"
            >
              Lupa password?
            </Link>

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
