import Image from "next/image";
import AddButton from "./components/AddButton";
import ListItem from "./components/ListItem";
import TodoProvider from "./store/TodoProvider";

export default function Home() {
  return (
    <TodoProvider>
      <main className="flex flex-col items-start gap-5 justify-start w-[100%] p-8">
        <AddButton />
        <ListItem />
      </main>
    </TodoProvider>
  );
}
