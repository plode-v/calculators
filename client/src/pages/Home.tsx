import { RiBillFill } from "react-icons/ri"
import { HomeIcon, AnimatedPage } from "../components"


const Home = () => {
    return (
        <AnimatedPage>
            <div className="h-[90vh] flex justify-center items-center">
                <div className="flex w-1/3 flex-wrap gap-5 justify-between">
                    <RiBillFill className="text-[100px] text-slate-500" href="" />
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Home