import Chats from "./Chats";
import Menubar from "./Menubar";

const Sidebar = () => {
    return (
        <section className="w-full hidden md:block md:w-[360px]">
            <Menubar/>
            <Chats/>
        </section>
    );
};

export default Sidebar;