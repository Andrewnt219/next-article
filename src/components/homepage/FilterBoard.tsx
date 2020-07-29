import { Form } from "@components/ui/form/Form";
import { TextField } from "@components/ui/form/TextField";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { filterSchema } from "@src/schema/filter/filter.schema";
import { TopHeadlinesApiRequest } from "@src/@types/newsapi";
import { SubmitButton } from "@components/ui/form/SubmitButton";

type Props = {
  onSubmit: (params: TopHeadlinesApiRequest) => void;
};
export type FilterFormValues = Pick<
  TopHeadlinesApiRequest,
  "country" | "q" | "category"
> & {};

/**
 * @description A control for filtering fetched articles
 * @param onSubmit handle submit
 */
function FilterBoard({ onSubmit }: Props): ReactElement {
  const {
    handleSubmit,
    errors,
    formState: { isValid },
    register,
  } = useForm<FilterFormValues>({ resolver: yupResolver(filterSchema) });

  const onFormSubmit = handleSubmit((data) => {
    onSubmit(data);
  });
  return (
    <Container>
      <Form onSubmit={onFormSubmit}>
        <TextField<FilterFormValues>
          type="text"
          id="filter_query"
          label="Query"
          name="q"
          errors={errors}
          register={register}
        />

        <SubmitButton>SEARCH</SubmitButton>
      </Form>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

export { FilterBoard };
