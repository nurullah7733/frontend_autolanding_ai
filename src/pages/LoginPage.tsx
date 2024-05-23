import Header from "@/components/layout/header/Header";

const LoginPage = () => {
  return (
    <div className="px-10">
      <Header />
      <div className="  w-full h-[calc(100vh-75px)] flex justify-center items-center">
        <div className="rounded-lg border  p-6 shadow-sm h-fit max-w-[400px] w-full">
          <div className="flex flex-col gap-2 rounded-lg pb-3">
            <button className="text-sm font-semibold bg-gray-100 py-2.5 px-5 border">
              Buyer
            </button>
            <button className="text-sm font-semibold bg-gray-100 py-2.5 px-5 border">
              Seller
            </button>
          </div>
          <h2 className="text-black dark:text-white text-2xl font-semibold tracking-tight">
            Login
          </h2>

          <div className="mt-5">
            <form>
              <div className="flex flex-col mb-2">
                <label className="text-black dark:text-white  pb-2 ">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  className="border h-10 rounded-lg p-2 text-sm"
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label className="text-black dark:text-white pb-2">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="********"
                  className="border h-10 rounded-lg p-2 text-sm"
                />
              </div>
              <div className="mb-2">
                <input
                  type="submit"
                  value="Login"
                  className="bg-primaryDark dark:text-black dark:bg-white text-white h-10 mt-2 w-full font-semibold text-sm rounded-lg"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
