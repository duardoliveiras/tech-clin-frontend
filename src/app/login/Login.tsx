export const Login = () => {
  return (
    <div className="flex w-1/2 h-full justify-center items-center">
      <div className="flex flex-col bg-white border text-black border-gray-300 w-[80%]  shadow-md rounded-lg py-2">
        <div className="w-full justify-center flex">
          <h1 className="text-2xl font-bold text-black">Entrar</h1>
        </div>
        <div className="flex flex-col w-full gap-y-8 p-10">
          <div className="flex flex-col w-full px-2">
            <p className="font-bold text-black">Email:</p>
            <input
              className="w-full h-10 rounded-lg border-blue-800 border px-2"
              type="email"
              placeholder="seunome@email.com"
            />
          </div>
          <div className="flex flex-col w-full px-2">
            <p className="font-bold text-black">Password:</p>
            <input
              className="w-full h-10 rounded-lg border-blue-800 border px-2"
              type="password"
            />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button className="flex bg-blue-500 rounded-lg p-2 text-white font-bold hover:bg-blue-600">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};
