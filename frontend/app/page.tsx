import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="relative">
        <h1 className="text-5xl absolute top-14 right-4 w-[70%]  text-white  ">
          <span className="bg-green-900"> Eat Health</span>y & Be Nutrition
          Wealthy, Is What We Offer
        </h1>
        <Image
          src="/assets/home.jpg"
          alt="home"
          className="w-[100%] bg-center h-[100%]"
          width={1000}
          height={1000}
        />
      </div>
      <div className="p-24">how is your life going in here</div>
    </main>
  );
}
