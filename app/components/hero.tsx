import Image from "next/image"
export default function Hero(){
    return(
        <>
          <Image
        src="/image/5.jpg"
        width={1500}
        height={1500}
        // fill
        alt="Hero Image"
        className="relative bottom-20  "
      />
        </>
    )
}