import Form from "./components/Form";
import { getVoterData } from "./utils/dataFetcher";

export default function Home() {
  let data = { items: [] };
  const onFormSubmit = async (nic) => {
    "use server";
    console.log(nic);
    try {
      return await getVoterData(nic);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center  md:p-24 sm:p-16 xs:p-10">
      <Form onSubmit={onFormSubmit} />
    </main>
  );
}
