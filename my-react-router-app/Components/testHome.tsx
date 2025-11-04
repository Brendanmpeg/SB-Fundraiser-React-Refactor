import Board from "./Board"
import ChatBoard from "./Board"

export default function HomePage() {
    return <>
    <h1>This is my test homepage</h1>
    <p>I am testing to see if I can define my landing page</p>
    <div className="flex justify-center flex-wrap" 
    >
    <ChatBoard />
    <ChatBoard />
    
    </div>

    </>
}