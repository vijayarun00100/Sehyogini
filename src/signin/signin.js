import logoDark from '../images/logoDark.svg';

function SignIn() {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-red-300/60'>
      <div className="flex justify-center items-center bg-white w-[80%] h-[80%] rounded-2xl p-8 shadow-lg">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <img src={logoDark} alt='head' className='w-[15%] mb-8' />
          <div className="w-[80%]">
            <form className="flex flex-col items-center">
              <div className="mb-4 flex items-center">
                <label htmlFor="phoneNumber" className="text-2xl font-['Poppins'] font-extra-bold flex items-center w-32 mr-4">
                  <span className="font-['Poppins'] font-extra-bold">Contact:</span>
                </label>
                <input id="phoneNumber" name="phoneNumber" className='border-black border px-2 py-1 rounded' />
              </div>
              <div className="mb-4 flex items-center">
                <label htmlFor="password" className="text-2xl font-['Poppins'] font-extra-bold flex items-center w-32 mr-4">
                  <span>Password:</span>
                </label>
                <input type="password" id="password" name="password" className='border-black border px-2 py-1 rounded' />
              </div>
              <button type="submit" className="bg-red-400 text-white px-4 py-2 rounded mt-4">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
