import React from 'react';

function Login() {
  document.title = 'Login';

  return (
    <div className="h-screen w-screen bg-slate-400 flex items-center justify-center p-4">
      <section className="bg-slate-50 border rounded-2xl p-4 flex flex-col flex-grow gap-4 sm:max-w-md">
        <h1 className="self-center font-medium text-4xl">Login</h1>
        <form id="login" className="flex flex-col gap-4">
          <label htmlFor="email">
            <span className="block mb-2">Email</span>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-md border-transparent border-2 bg-gray-200 focus:bg-gray-50 focus:border-slate-500 focus:ring-0"
              placeholder="example@email.com"
              required
            />
          </label>
          <label htmlFor="password">
            <span className="block mb-2">Password</span>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full rounded-md border-transparent border-2 bg-gray-200 focus:bg-gray-50 focus:border-slate-500 focus:ring-0"
              required
            />
          </label>
          <button
            type="submit"
            className="border rounded-md p-2 mt-2 bg-slate-600 text-slate-50 font-medium hover:bg-slate-700"
          >
            Log in
          </button>
        </form>
      </section>
    </div>
  );
}

export default Login;
