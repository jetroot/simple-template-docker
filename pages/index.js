import Footer from "../components/Footer/Footer";
import IndexNavbar from "../components/NavBar/IndexNavbar";


export default function Home() {
  return (
    <>
        <IndexNavbar />

        <section className="relative pt-16 items-center flex h-screen">
            <div className="container mx-auto items-center flex flex-wrap">
                <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                    <div className="pt-32 sm:pt-0">
                        <h2 className="font-semibold text-4xl text-blueGray-600">
                            JetRoot NextJS - A beautiful extension for Tailwind CSS.
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                            JetRoot NextJS Lorem ipsum is placeholder text commonly used in the graphic, print,
                            and publishing industries for previewing layouts and visual mockups.
                        </p>
                        <div className="mt-12">
                            <a
                                href="#"
                                target="_blank"
                                className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                            >
                                Get started
                            </a>
                            <a
                                href="#"
                                className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                                target="_blank"
                            >
                                Github Star
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <img
                className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 sm:mt-0 w-10/12"
                src="/img/pattern_nextjs.png"
                alt="..."
            />
        </section>
        <Footer />
    </>
  )
}
