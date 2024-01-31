// components/Form.js
import { useRouter } from 'next/router'

const Form = () => {
    const router = useRouter()
  
    return (
      <form className="mx-auto flex justify-center w-full pt-10 sm:w-3/4">

          <button className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20" type="button" onClick={() => router.push('mailto:dsoni30a@gmail.com')} style={{ backgroundColor: '#9333EA' }}>
            Send Email!
            <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
          </button>
     
      </form>
    );
  };
  
  export default Form;
  