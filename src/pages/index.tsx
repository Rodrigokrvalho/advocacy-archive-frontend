import { Table } from "@/components/Table";
import { MainFilters } from "@/components/filters/MainFilters";
import { Header } from "@/layout/Header";
import { Container } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Home() {
  const { push } = useRouter();

  function handleNavigateToProcess(id: string | number) {
    push(`/process/${id}`);
  }

  return (
    <>
      <Header />

      <main>
        <Container maxW="container.xl" mt={20}>

          <MainFilters />

          <Table
            data={[
              { id: 1, name: "teste1", email: "test1@test.com" },
              { id: 2, name: "teste2", email: "test2@test.com" },
              { id: 3, name: "teste3", email: "test3@test.com" },
              { id: 4, name: "teste4", email: "test4@test.com" },
              { id: 5, name: "teste5", email: "test5@test.com" },
              { id: 6, name: "teste6", email: "test6@test.com" },
              { id: 7, name: "teste7", email: "test7@test.com" }
            ]}
            headers={[
              {
                key: "id", value: "ID"
              },
              {
                key: "name", value: "Nome"
              },
              {
                key: "email", value: "Email"
              }
            ]}
            onClickRow={handleNavigateToProcess}
          >

          </Table>
        </Container>
      </main>
    </>
  );
}
