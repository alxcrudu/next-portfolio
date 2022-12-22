import Image from "next/image"
import full from "/public/full.png"

function Introduction() {
  return (
    <div className="container">
        <div className="even-columns | min-h-screen pt-24">
            <div className="flex justify-center items-start flex-col">
                <h1 className="text-7xl">I build web applications</h1>
                <p className="pt-6">I am a full-stack web developer lorem ipsum dolor sit amet</p>   
            </div>
            <div className="grid place-items-center">
              <Image src={full} alt="illustration" />
            </div>
        </div>
    </div>
  )
}

export default Introduction