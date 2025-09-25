export default function UserRolePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-sm p-8 w-full max-w-2xl">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-900">
              ScapeSync
            </span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Who Are You?
          </h1>
          <p className="text-gray-600">
            Choose the option that best describes you so we can tailor your
            experience.
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Client Card */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 cursor-pointer hover:border-green-300 transition-colors">
            <div className="text-center">
              {/* Client Illustration */}
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                I'm a Client
              </h3>
              <p className="text-sm text-gray-600">
                Discover services & book projects effortlessly
              </p>
            </div>
          </div>

          {/* Business Owner Card */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-gray-300 transition-colors">
            <div className="text-center">
              {/* Business Owner Illustration */}
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                I'm a Business Owner
              </h3>
              <p className="text-sm text-gray-600">
                Manage jobs, staff & connect with ease
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
