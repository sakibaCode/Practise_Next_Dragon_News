

const NewsByCategoryPage = async({params}) => {

    const {id} = await params
    console.log(id,"paramRes");
    return (
        <div>
            News By Category
        </div>
    );
};

export default NewsByCategoryPage;