import { Header, ListProducts } from "./componets";



export default function Home() {
  return (
    <div className=" flex flex-col items-center  min-h-screen   " id="Home">
    <Header />
    <ListProducts />

    </div>
  );
}
