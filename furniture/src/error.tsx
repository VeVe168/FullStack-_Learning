function Error() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200">
        <img
          src="/images/error.png"
          alt="Sorry"
          className="max-w-sm  rounded-lg"
        />

        <div className="flex flex-row">
          <img
            src="/images/sorry.jpg"
            alt="Sorry"
            className="w-22 h-22 rounded-full object-cover max-w-sm"
          />

          <h1 className="text-4xl font-bold mt-5 text-red-500">
            Error - Page Not Found!
          </h1>
        </div>
      </div>
    </>
  );
}
export default Error;
