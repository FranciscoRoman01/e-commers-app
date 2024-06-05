import { useFetchCategories } from "../../services/useFetchCategories";
import { Loading } from "../../ui/components/Loading";
import { SliderContainer } from "../components/slider/SliderContainer";

export function HomePage () {
    const { categories, loading } = useFetchCategories();
    if(loading){
        return (
            <div className="w-screen h-screen flex flex-col justify-center"> 
                <Loading />
            </div>
        )
    }
    return (
        <div className="container p-4 mx-auto">
            <h1 className="text-2xl font-bold">Home page</h1>
            <SliderContainer categories={categories} />
        </div>
    )
}