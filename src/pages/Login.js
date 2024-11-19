import Layout from '../components/Layout/Layout'
export default function Login() {
  return (
    <Layout noheader="noheader">
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        {/* <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            alt="Your Company"
            src="https://www.jagranimages.com/images/jagran-icon.svg"
            className="mx-auto h-16 w-auto"
          />
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div> */}

        <div className="mt-10 sm:mx-auto sm:w-full max-w-3xl">
          <div className="bg-white px-6 py-12 shadow rounded-2xl sm:px-12">
            {/* <h2 className="text-center mb-4 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2> */}
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <div className='col-span-1 flex items-center'>
                <div>
                  <figure><svg className="h-10 w-24"><use href="#wms"></use></svg></figure>
                  <h3 className='uppercase font-bold text-[15px]'>Website Management System</h3>
                  <p className='text-[10px] tracking-[0.06rem] uppercase text-gray-400'>Single Platform, Endless Possibilities</p>
                </div>
              </div>
              <form action="#" method="POST" className="space-y-6 col-span-1">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-2.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 py-2.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>


                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-red-600 px-3 py-3 text-sm font-semibold leading-6 text-white uppercase shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </Layout>
  )
}
