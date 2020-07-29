import { TextField } from "@components/ui/form/TextField";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { filterSchema } from "@src/schema/filter/filter.schema";
import { TopHeadlinesApiRequest } from "@src/@types/newsapi";
import Button from "@material-ui/core/Button";
import _ from "lodash";

import { categoryNames, countryCodes } from "@src/data/newsApi.data";
import { Select } from "@components/ui/form/Select";

type Props = {
  onSubmit: (params: TopHeadlinesApiRequest) => void;
  isFetching: boolean;
};
export type FilterFormValues = Pick<
  TopHeadlinesApiRequest,
  "country" | "q" | "category"
> & {};

/**
 * @description A control for filtering fetched articles
 * @param onSubmit handle submit
 * @param isFetching is the article being fetched
 */
function FilterBoard({ onSubmit, isFetching }: Props): ReactElement {
  const { handleSubmit, errors, register } = useForm<FilterFormValues>({
    resolver: yupResolver(filterSchema),
  });

  const onFormSubmit = handleSubmit((data) => {
    const emptyFilteredData = _.omitBy(data, _.isEmpty);

    onSubmit(emptyFilteredData);
  });
  return (
    <Container>
      <Form onSubmit={onFormSubmit} noValidate>
        <Row>
          <Select<FilterFormValues>
            register={register}
            name="category"
            id="filter-category"
            errors={errors}
            options={categoryNames}
            label="Category"
            width="9.5rem"
          />

          <Select<FilterFormValues>
            register={register}
            name="country"
            id="filter-country"
            errors={errors}
            options={countryCodes}
            label="Country"
            width="3.5rem"
          />
        </Row>

        <TextField<FilterFormValues>
          type="text"
          id="filter_query"
          label="Search Term"
          name="q"
          errors={errors}
          register={register}
        />

        <input
          type="range"
          name="page-size"
          min={20}
          max={100}
          step={5}
          id="filter-page-size"
          list="page-size-list"
        />

        <SubmitButton
          variant="text"
          color="primary"
          type="submit"
          disabled={isFetching}
        >
          {isFetching ? "FETCHING..." : "SEARCH"}
        </SubmitButton>
      </Form>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

type FormProps = {};
const Form = styled.form<FormProps>`
  width: 25rem;
`;

type RowProps = {};
const Row = styled.div<RowProps>`
  display: flex;
  justify-content: space-between;
`;

type SubmitButtonProps = {};
const SubmitButton = styled(Button)<SubmitButtonProps>`
  display: block;
  margin: 0 auto;

  font-size: inherit;
`;

export { FilterBoard };
