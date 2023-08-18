'use client';

import { Table } from "@/components/Table";
import { BaseButton } from "@/components/buttons/BaseButton";
import { FilterDataForm, MainFilters } from "@/components/filters/MainFilters";
import { Header } from "@/layout/Header";
import { setupAPIClient } from "@/services/api";
import { api } from "@/services/apiClient";
import { Container } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { FiPlus } from "react-icons/fi";

interface Props {
  process: any;
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  const isAuthenticated = await apiClient.get('/auth/me')
    .then(response => response.status === 200)
    .catch(() => false);

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  const process = await apiClient.get('/v1/all')
    .then(response => response.data)
    .catch(() => null);

  return {
    props: { process: process || null }
  };

};

export default function Home({ process }: Props) {
  const { push } = useRouter();

  async function handleFilterProcess(data: FilterDataForm) {
    await api.get('/v1/all')
      .then(response => console.log(response))
      .catch(() => {});
  }

  function handleNavigateToProcess(id: string | number) {
    push(`/process/${id}`);
  }

  return (
    <>
      <Header />

      <main>
        <Container maxW="container.xl" mt={20}>
          <Link href="/process/new">
            <BaseButton leftIcon={<FiPlus />}>
              Novo
            </BaseButton>
          </Link>

          <MainFilters onSubmit={handleFilterProcess} />

          <Table
            data={process}
            headers={[
              {
                key: "client_name", value: "Cliente"
              },
              {
                key: "process_number", value: "Nº Processo"
              },
              {
                key: "action", value: "Ação"
              },
              {
                key: "status", value: "Andamento"
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
