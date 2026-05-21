import Link from "next/link"
export default function Footer(){
        return(
                <>

    <footer className="bg-red-800 text-white mt-20 cursor-pointer    ">

                {/* ..................... */}
        {/* <div > */}

                {/* ..................... */}
            <div className="flex justify-between items-center mr-50 ml-50   p-10">


                {/* ..................... */}
                <div className="w-1/2">

                    <h1 className="font-bold mb-10 text-2xl">About Us Collection</h1>
                    <p className="justify-center w-90">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum odio quas facilis minima, culpa reiciendis. Eius, incidunt vitae tenetur consequuntur blanditiis cupiditate at magni ducimus in a hic corrupti. Iste.</p>

                </div>
                {/* ..................... */}


                {/* <div className="">
                    <h1 className="font-bold mb-10  text-2xl">Quicks Links</h1>
                    <Link href="">Home</Link>
                    <Link href="">Collection</Link>
                    <Link href="">Contact Us</Link>
                </div> */}
                


                {/* ..................... */}
                <div className="">
                    
                    <h1 className="font-bold mb-17 text-2xl">Contact Us</h1>
                    <p className="m-2 ">Email : example@gmail.com</p>
                    <p className="m-2 ">Phone No : 0300-000000-0</p>
                    <p className="m-2 ">Location : F-5 Block Islamabad - Punjab</p>
                    
                </div>
                {/* ..................... */}


                
            </div>
                {/* ..................... */}




              


            
        {/* </div> */}
                {/* ..................... */}

          {/* ..................... */}
            <div className="text-center font-bold bg-red-600 p-5">@CopyRight 2026 || Khan Collection Store </div>
                {/* ..................... */}

    </footer>
        
    </>
    )

}
