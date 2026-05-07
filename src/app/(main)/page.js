
async function getCategories() {

  const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
  const data = await res.json()

  return data.data
}


export default async function Home() {

  const categories = await getCategories()
  console.log(categories)


  return (
    <div className="container mx-auto grid grid-cols-12 gap-5 mt-10 font-semibold">

      <div className="col-span-3 text-center border border-gray-200">
        <h1 className="text-2xl">All Categories</h1>
        {
          categories.news_category.map((category) => (
            <ul key={category.category_id}>
              <li className="text-gray-700 ">{category.category_name}</li>
            </ul>
          ))
        }
      </div>

      <div className="col-span-6 text-center border border-gray-200">
        <h1  className="text-2xl">All News</h1>
      </div>

      <div className="col-span-3 text-center border border-gray-200">
        <h1  className="text-2xl">Social Icons</h1>
      </div>
    </div>
  );
}
