import Image from "next/image";
import AddButton from "./components/AddButton";
import ListItem from "./components/ListItem";
import TodoProvider from "./store/TodoProvider";
import AppWalletProvider from "./components/AppWalletProvider";

export default function Home() {
  return (
    <AppWalletProvider>
      <TodoProvider>
        <main className="flex flex-col items-start gap-5 justify-start w-[100%] p-8">
          <AddButton />
          <ListItem />
        </main>
      </TodoProvider>
    </AppWalletProvider>
  );
}
