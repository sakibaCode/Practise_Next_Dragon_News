import LeftSidebar from "@/components/homepage/news/LeftSidebar"
import RightSidebar from "@/components/homepage/news/RightSidebar"
import { getCategories, getNewsByCategoryId } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"


const NewsByCategoryPage = async ({ params }) => {

    // MUST await in Next.js 16
    const { id } = await params

    const categories = await getCategories()

    const news = await getNewsByCategoryId(id)

    return (

        <div className="container mx-auto grid grid-cols-12 gap-5 mt-10">

            <div className="col-span-3 border p-5 rounded-xl">
                <LeftSidebar
                    categories={categories}
                    activeId={id}
                />
            </div>

            <div className="col-span-6 border p-5 rounded-xl">

                <h1 className="text-3xl font-bold mb-5">
                    Total News: {news?.length || 0}
                </h1>

                {
                    Array.isArray(news) && news.length > 0 ? (

                        <div className="space-y-5">

                            {
                                news.map((n) => (

                                    <div
                                        key={n._id}
                                        className="border rounded-xl p-4"
                                    >

                                        <Image
                                            src={n.image_url}
                                            alt={n.title}
                                            width={730}
                                            height={730}
                                            priority={false}
                                            
                                        />

                                        <h1 className="text-2xl font-bold mt-4">
                                            {n.title}
                                        </h1>

                                        <p className="mt-3 text-gray-600 line-clamp-3">
                                         {n.details}    
                                        </p>

                                        <div>

                                            <Link href={`/news/${n?._id || n?.id}`}>

                                               <button className="btn">See Details </button>
                                            </Link>
                                        </div>

                                    </div>
                                ))
                            }

                        </div>

                    ) : (

                        <h1 className="text-red-500 text-2xl">
                            No News Found
                        </h1>

                    )
                }

            </div>

            <div className="col-span-3 border p-5 rounded-xl">
                <RightSidebar />
            </div>

        </div>
    )
}

export default NewsByCategoryPage